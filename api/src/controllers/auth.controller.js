const passport = require("passport");
const jwt = require('jsonwebtoken');
const { Book, Genres, Images, conn, Order, Order_car } = require("../db");
const userCache = require("../config/userCache");



const login = async (req, res, next) => {
    passport.authenticate('local', { session: false }, function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.redirect('/login');
        }

        req.logIn(user, async (err) => {

            if (err) {
                return next(err);
            }
            const token = jwt.sign({ id: user.id }, 'soyUnSuperSecretoJWT', { expiresIn: '1d' })
            
            // comprobamos si el usuario tiene un carrito de compras activo
            const { books } = await Order.findOne({
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

            const quantity_books = books.map(b => {
                return {
                    id: b.id,
                    name: b.name,
                    price: b.price,
                    images: b.images,
                    amount: b.order_car.quantity
                }
            })

            return res.json({
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                user_id: user.id,
                order: quantity_books.length > 0 ? quantity_books : null,
                token
            })
        });
    })(req, res, next);
}

const logout = async (req, res) => {

    const userId = req.user.id;
    const products = userCache.get('userId')

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

    if (req.isAuthenticated()) {
        req.logout();
    }
    res.status(200).send("Haz hecho Logout");
};

module.exports = {
    login,
    logout
}