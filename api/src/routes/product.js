const { Router } = require("express");
const router = Router();

const {
	getBooks, addBooks, filteringOptions, productFilter, getBookById
} = require("../controllers/product.controller")


//aqui van las funciones para cada ruta
router.get("/getBookById/:idProduct", getBookById)
router.get("/:offset/:limit", getBooks)
router.get("/filteringOptions", filteringOptions)
router.get("/productByFilters", productFilter)
router.post("/addBooks", addBooks)




module.exports = router;
