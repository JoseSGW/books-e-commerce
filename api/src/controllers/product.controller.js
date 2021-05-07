const Sequelize = require("sequelize");
const { Book, Genres, Images, conn } = require("../db")

const Op = Sequelize.Op;

const cacheMemory = {
    keyWord: '432jjkhg3423khk4321fsdffneflse',
    products: []
}


const addBooks = async (req, res) => {

    const { product, genres, newImages } = req.body; //{ name, resume, year, author, editorial, price, stock, discount_id}
    //genres sera un array con id de generos

    const newProduct = await Book.create(product)

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



const getBooks = async (req, res) => {

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
            console.log("soy la respuesta", cacheMemory.products)
            res.send(cacheMemory.products)
        }
        catch (error) {
            console.error("ERROR: ", error)
        }
    }
    else {
        console.log("soy el mismo de antes")
        res.send(cacheMemory.products) // esto devuelve los mismos productos de la consulta anterior si es que la palabra era la misma
    }
}

const filteringOptions = async (req, res) => {

    const options = {
        nest: true,
        raw: true
    }

    try {
        const authors = await conn.query('SELECT author FROM books GROUP BY (author)', options)

        const minAndMax = await conn.query('SELECT MIN(price) as min_price, MAX(price) as max_price FROM books', options)

        cacheMemory.minAndMax = minAndMax;

        const years = await conn.query("SELECT year FROM books GROUP BY(year)", options)

        const genres = await conn.query("SELECT name FROM genres GROUP BY(name)", options)

        const data = [
            authors,
            minAndMax,
            years,
            genres
        ]

        res.send(data);
    }
    catch (error) {
        console.error(error)
    }
}


const productFilter = async (req, res) => {

    const { author, year, genre, min, max } = req.query

    const options = {
        where: {},
        include: [{ all: true }]
    }

    if (author && author !== 'undefined') {
        options.where.author = author
    }
    if (year && year !== 'undefined') {
        options.where.year = year
    }
    if(genre && genre !== 'undefined'){
        options.include.push({ model: Genres, where: { name: genre } })
    }
    if (min && min !== 'undefined' || max && max !== 'undefined') {
        options.where.price = { [Op.between]: [min ? min : cacheMemory.minAndMax[0].min_price, max ? max : cacheMemory.minAndMax[0].max_price] }
    }

    try {

        const products = await Book.findAll(options)

        res.send(products)

    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    getBooks,
    productFilter,
    addBooks,
    filteringOptions
}