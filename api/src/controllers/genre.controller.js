const Sequelize = require("sequelize");
const { Book, Genres, conn } = require("../db")

const Op = Sequelize.Op;



const getGenre = async (req, res) => {
    try {
        
        const genres = await conn.query("SELECT * FROM genres", {
            nest: true,
            raw: true,
        })
        res.send(genres)

    } catch (error) {
        console.error("ERROR: ", error)
    }
} 

const addGenre = async (req, res) => {
    const genres = req.body?.genres; // Llega un array con esta forma: [ {name : "NuevoGenero"}, {name: NuevoGenero2} ]
    try {
        await Genres.bulkCreate(genres)

        res.json({msg: 'Géneros agregados correctamente'})
    } catch (error) {
        console.error(error)
    }
}




const addGenreToBook = async (req, res) => {

    const { books, genres, images } = req.body;

    try {

        const foundBook = await Book.findByPk(id, {raw: true, nest: true})
        
        if(books.length > 0 && genres.length > 0){

            for (const { id } of books) {
                
                
                const foundGenre = await Genres.findByPk(id, {raw: true, nest: true})
            }

        }


    } catch (error) {
        console.error(error)
    }
}





module.exports = {
    getGenre,
    addGenre
}