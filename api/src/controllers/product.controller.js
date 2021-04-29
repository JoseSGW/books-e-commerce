const Sequelize = require("sequelize");
const { Book, Genres } = require("../db")

const Op = Sequelize.Op;

const cacheMemory = {
    keyWord: '432jjkhg3423khk4321fsdffneflse',
    products: []
}


const addBooks = async (req, res) => {

    const { product, genres } = req.body; //{ name, resume, year, author, editorial, price, stock, discount_id}
    //genres sera un array con id de generos

    const newProduct = await Book.create(product)

    if(genres.length > 0) newProduct.setGenres(genres)
            
    


    res.json({msg: "Producto creado correctamente"})

}



const getBooks = async (req, res) => {

    const { offset = 0, limit = 40 } = req.params;

    const newKeyWord = req.query?.word;

    if (cacheMemory.keyWord !== newKeyWord) { //solo hago la consulta si la palabra es distinta. Sino, envio la misma respuesta

        cacheMemory.keyWord = newKeyWord; //actualizo la ultima consulta

        try {
            cacheMemory.products = await Book.findAll({
                raw: true,
                nest: true,
                offset,
                limit: 40,
                where: {
                    [Op.or]: [
                        { name: { [Op.iLike]: `%${newKeyWord}%` } },
                        { resume: { [Op.iLike]: `%${newKeyWord}%` } }
                    ]
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


const productFilter = async () => {

}



module.exports = {
    getBooks,
    productFilter,
    addBooks
}