const { Router } = require("express");
const router = Router();

const {
	getGenre,
    addGenre
} = require("../controllers/genre.controller")


//aqui van las funciones para cada ruta
router.get("/getGenre", getGenre)
router.post("/addGenre", addGenre)



module.exports = router;