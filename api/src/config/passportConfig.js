const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../db')

passport.use(new LocalStrategy(
    function (username, password, done) {
        User.findOne({ where: { email: username } })
            .then((user) => {
                if (!user) return done(null, false, { message: 'Nombre de usuario incorrecto.' });
                if (!user.validPassword(password)) return done(null, false, { message: 'Contraseña incorrecta.' });
                return done(null, user);
            })
            .catch(err => done(err))
    }
));



passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findByPk(id, function (user) {
        done(null, user);
    });
});

module.exports = passport;