const Sequelize = require("sequelize");
const { Book } = require("../db")

const Op = Sequelize.Op;

const cacheMemory = {
    keyWord: '432jjkhg3423khk4321fsdffneflse',
    products: []
}



const getProducts = async (req, res) => {

    const { offset = 0, limit = 12 } = req.params;

    const newKeyWord = req.query?.word;

    if (cacheMemory.keyWord !== newKeyWord) { //solo hago la consulta si la palabra es distinta. Sino, envio la misma respuesta

        cacheMemory.keyWord = newKeyWord; //actualizo la ultima consulta

        try {
            cacheMemory.products = await Book.findAll({
                raw: true,
                nest: true,
                offset,
                limit,
                where: { name: newKeyWord && newKeyWord !== '' ? { [Op.iLike]: `%${newKeyWord}%` } : { [Op.not]: null } }
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
    getProducts
}