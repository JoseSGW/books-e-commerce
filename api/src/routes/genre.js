const { Router } = require("express");
const router = Router();

const {
	getGenre,
    addGenre
} = require("../controllers/genre.controller")


//aqui van las funciones para cada ruta
router.get("/genres", getGenre)
router.get("/genres/addGenre", addGenre)



module.exports = router;