const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
    // defino el modelo
    const Order = sequelize.define('order', {
        total_price: {
            type: DataTypes.INTEGER,
        },
        status: {
            type: DataTypes.STRING,
        },
        paid_method: {
            type: DataTypes.STRING,
        }
    });

    return Order;
}