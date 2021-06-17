const passport = require("passport");
const jwt = require('jsonwebtoken');
const { Book, Genres, Images, conn, Order } = require("../db");
const userCache = require("../config/userCache");



const login = async (req, res, next) => {
    passport.authenticate('local', { session: false }, function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.redirect('/login');
        }

        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }
            const token = jwt.sign({ id: user.id }, 'soyUnSuperSecretoJWT', { expiresIn: '1d' })
            return res.json({
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                user_id: user.id,
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
            raw: true
        })

        console.log(orderFound)
        await orderFound.setBooks([])

        for (let { id, amount } of products) {
            await orderFound.id.addBook(id, { quantity: amount })
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