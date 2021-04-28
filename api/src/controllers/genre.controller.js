const Sequelize = require("sequelize");
const { Book, Genre } = require("../db")

const Op = Sequelize.Op;






module.exports = {
    getGenre,
    addGenre
}