const { Router } = require("express");
const router = Router();

const {
	getProducts,
} = require("../controllers/product.controller")


//aqui van las funciones para cada ruta
router.get("/:offset/:limit", getProducts)



module.exports = router;
