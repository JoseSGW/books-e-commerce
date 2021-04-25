const Sequelize = require("sequelize");
const { Book } = require("../db")

const Op = Sequelize.Op;



const getProducts = async (req, res) => {

    const { offset = 0, limit = 12 } = req.params;

    try {
        const products = await Book.findAll({
            raw: true,
            nest: true,
            offset,
            limit
        })
        res.send(products)
    } 
    catch (error) {
        console.error("ERROR: ", error)
    }
}


module.exports = {
    getProducts
}