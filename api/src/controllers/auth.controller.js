const passport = require("passport");




const login = async (req, res, next) => {
    passport.authenticate('local', { session: true }, function (err, user, info) {
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
            return res.json({
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                user_id: user.id   
            })
        });
    })(req, res, next);
}

module.exports = {
    login
}