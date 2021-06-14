const { User } = require('../db')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;



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

passport.use(new JwtStrategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'soyUnSuperSecretoJWT',
        passReqToCallback: true, //permite pasar el req
    },
    function (req, jwt_payload, done) {
        console.log("hola", jwt_payload)
        User.findByPk(jwt_payload.id)
            .then(user => {
                //req.user = user;
                return done(null, user)
            })
            .catch(err => {
                return done(err, false, {
                    message: 'Token not matched.'
                });
            })
    })
)


passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findByPk(id, function (user) {
        done(null, user);
    });
});

module.exports = passport;