const { Router } = require("express");
const router = Router();

const {
    getUsers, addUser, cartUserUpdate
} = require("../controllers/user.controller")


//aqui van las funciones para cada ruta
router.post("/addUser", addUser)
router.get("/:offset/:limit", getUsers)
router.put("/updateCart", cartUserUpdate)



module.exports = router;