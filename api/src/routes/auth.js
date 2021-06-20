const { Router } = require("express");
const passport = require("passport");
const router = Router();
const {
    login,
    logout,
    saveShoppingCart,
    userHaveAShoppingCart
/*     logout,
    me */
} = require("../controllers/auth.controller");


router.post("/login", login);
router.post('/logout', passport.authenticate('jwt', {session: false}), logout);
router.post('/saveShoppingCart', passport.authenticate('jwt', {session: false}), saveShoppingCart);
router.post('/userHaveAShoppingCart', passport.authenticate('jwt', {session: false}), userHaveAShoppingCart)
/* router.post("/logout", logout);
router.get("/me", me); */


module.exports = router;