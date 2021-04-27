const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  const Book = sequelize.define('book', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
    },
    author: {
        type: DataTypes.STRING,
    },
    editorial:{
        type: DataTypes.STRING,
    },
    discount_id: {
      type: DataTypes.INTEGER
    }
  });

  return Book;
}