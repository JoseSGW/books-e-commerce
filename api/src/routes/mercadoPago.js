const { Router } = require("express");
const router = Router();

const {
	createPreference,
    feedback
} = require("../controllers/mercadoPago.controller")


//aqui van las funciones para cada ruta
router.post("/create_preference", createPreference)
router.get('/feedback', feedback)



module.exports = router;