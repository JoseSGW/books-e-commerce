const Sequelize = require("sequelize");
const { Book, Genres, Images, conn, User } = require("../db")

const Op = Sequelize.Op;


const addUser = async (req, res) => {

    const { user, email, password } = req.body; 


    const newProduct = await User.create(product) //comprobar que el email no exista

    if (genres.length > 0) {
        for (const id of genres) {
            const genre = await Genres.findByPk(id)
            newProduct.addGenre(genre)
        }
    }

    if (newImages.length > 0) {
        for (const url of newImages) {
            const image = await Images.create({ url });
            newProduct.addImage(image)
        }
    }

    res.json({ msg: "Producto creado correctamente" })
}



const getUsers = async (req, res) => {

    const { offset = 0, limit = 40 } = req.params;

    const newKeyWord = req.query?.word;

    if (cacheMemory.keyWord !== newKeyWord) { //solo hago la consulta si la palabra es distinta. Sino, envio la misma respuesta

        cacheMemory.keyWord = newKeyWord; //actualizo la ultima consulta

        try {
            cacheMemory.products = await Book.findAll({
                nest: true,
                //plain: true,
                offset,
                limit,
                where: {
                    [Op.or]: [
                        { name: { [Op.iLike]: `%${newKeyWord}%` } },
                        { resume: { [Op.iLike]: `%${newKeyWord}%` } }
                    ]
                },
                include: {
                    all: true
                }
            })
            res.send(cacheMemory.products)
        }
        catch (error) {
            console.error("ERROR: ", error)
        }
    }
    else {
        res.send(cacheMemory.products) // esto devuelve los mismos productos de la consulta anterior si es que la palabra era la misma
    }
}




module.exports = {
    getUsers,
    addUser,
}