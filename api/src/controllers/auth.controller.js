const passport = require("passport");
const jwt = require('jsonwebtoken');



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
            const token = jwt.sign({id: user.id}, 'soyUnSuperSecretoJWT', { expiresIn : '1d' })
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
    if (req.isAuthenticated()) {
        req.logout();
    }
    res.status(200).send("Haz hecho Logout");
};

module.exports = {
    login,
    logout
}