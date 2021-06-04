const { Router } = require("express");
const router = Router();
const {
    login,
    logout
/*     logout,
    me */
} = require("../controllers/auth.controller");

router.post("/login", login);
router.get('/logout', logout)
/* router.post("/logout", logout);
router.get("/me", me); */


module.exports = router;