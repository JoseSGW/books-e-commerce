const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
    // defino el modelo
    const Discount = sequelize.define('discount', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        percent_text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        percent: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    });

    return Discount;
}