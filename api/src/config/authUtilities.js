const { Book, Order, Images } = require("../db");


const saveInDbUserShoppingCart = async (userId, products) => {
    try {
        const [orderFound] = await Order.findOrCreate({
            where: {
                userId: userId,
                status: 'OPEN'
            },
            defaults: {
                userId: userId,
                status: 'OPEN'
            },
            nest: true,
        })

        await orderFound.setBooks([])

        if (products && products.length > 0) {

            for (let { id, amount } of products) {
                const book = await Book.findByPk(id) //comprobar si hay stock
                await orderFound.addBook(book, { through: { quantity: amount } })
            }
        }
    } catch (error) {
        console.error(error)
    }
    return
}

const haveAShoppingCart = async (user) => {
    const orderExist = await Order.findOne({
        where: {
            userId: user.id,
            status: 'OPEN'
        },
        include: {
            model: Book,
            include: {
                model: Images,
                nest: true
            }
        },
        nest: true
    })

    let quantity_books = []; //los productos del usuario. Se llenaran despues en caso que exista una orden

    if (orderExist) {
        const { books } = orderExist;

        quantity_books = books.map(b => {
            return {
                id: b.id,
                name: b.name,
                price: b.price,
                images: b.images,
                amount: b.order_car.quantity
            }
        })
    }
    return quantity_books;
}


module.exports = {
    saveInDbUserShoppingCart,
    haveAShoppingCart
}