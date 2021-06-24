const Sequelize = require("sequelize");
const userCache = require("../config/userCache");
const { Book, Genres, Images, conn, User, Order } = require("../db")
const mercadopago = require("mercadopago");
require('dotenv').config()

mercadopago.configurations.setAccessToken(process.env.MERCADO_PAGO_TOKEN);

const createPreference = (req, res) => {

    const ShoppingCartProduct = req.body;

    const items = ShoppingCartProduct.map(item => {
        return {
            id: item.id,
            title: item.name,
            unit_price: item.price,
            quantity: item.amount,
        }
    })
    console.log(items)
    let preference = {
        items,
        back_urls: {
            success: "http://localhost:3000/?status=approved",
            failure: "http://localhost:3000/?status=rejected",
            pending: "http://localhost:3000/?status=in_process",
        },
        auto_return: "approved",
    };

    mercadopago.preferences.create(preference)
        .then(function (response) {
            res.json({ url: response.body.sandbox_init_point })
        }).catch(function (error) {
            console.error(error);
        });
}

const feedback = (req, res) => {
    res.json({
        Payment: request.query.payment_id,
        Status: request.query.status,
        MerchantOrder: request.query.merchant_order_id
    })
}

module.exports = {
    createPreference,
    feedback
}
