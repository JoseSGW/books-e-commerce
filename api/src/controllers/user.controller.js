const Sequelize = require("sequelize");
const { Book, Genres, Images, conn, User } = require("../db")
const NodeCache = require("node-cache");
const userCache = new NodeCache();

const Op = Sequelize.Op;


const addUser = async (req, res) => {

    const { usuario, email, password } = req.body;

    try {
        const emailAlreadyExist = await User.findAll({
            where: {
                email
            }
        })
        if (emailAlreadyExist.length === 0) {
            const newUser = await User.create({
                firstname: usuario,
                email,
                password
            })
            res.send(newUser)
        }
        else {
            res.json({ msg: "El email ingresado ya se encuentra en uso" })
        }
    }
    catch (error) {
        console.error(error)
    }
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

const cartUserUpdate = (req, res) => {

    const { updatedProducts } = req.body

    userCache.set('userId', updatedProducts)

    console.log(userCache.get('userId'))

    res.json({msg: 'Carrito actualizado'})
}

const insertCartIntoDatabase = () => {

    
}



module.exports = {
    getUsers,
    addUser,
    cartUserUpdate
}