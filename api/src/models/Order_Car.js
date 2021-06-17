const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
    // defino el modelo
    const Order_car = sequelize.define('order_car', {
        quantity: {
            type: DataTypes.INTEGER,
        },
    });

    return Order_car;
}