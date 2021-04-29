const { Router } = require("express");
const router = Router();

const {
	getBooks, addBooks
} = require("../controllers/product.controller")


//aqui van las funciones para cada ruta
router.get("/:offset/:limit", getBooks)
router.post("/addBooks", addBooks)




module.exports = router;
