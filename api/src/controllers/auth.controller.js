const passport = require("passport");
const jwt = require('jsonwebtoken');
const { Book, Genres, Images, conn, Order, Order_car } = require("../db");
const userCache = require("../config/userCache");
const { saveInDbUserShoppingCart, haveAShoppingCart } = require("../config/authUtilities");




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

            const quantity_books = await haveAShoppingCart(user) //comprobar si el usuario tiene carrito de compra activo

            return res.json({
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                user_id: user.id,
                order: quantity_books,
                token
            })
        });
    })(req, res, next);
}

const logout = async (req, res) => {

    const userId = req.user.id;
    const products = userCache.get('userId')

    saveInDbUserShoppingCart(userId, products)

    
    if (req.isAuthenticated()) {
        req.logout();
    }
    res.status(200).send("Haz hecho Logout");
};

const saveShoppingCart = async (req, res) => {
    const userId = req.user.id;
    const products = userCache.get('userId')

    saveInDbUserShoppingCart(userId, products)
    res.status(200);
}

const userHaveAShoppingCart = async (req, res) => {

    const user = req.user

    const quantity_books = await haveAShoppingCart(user)

    res.json(quantity_books)
}



module.exports = {
    login,
    logout,
    saveShoppingCart,
    userHaveAShoppingCart
}