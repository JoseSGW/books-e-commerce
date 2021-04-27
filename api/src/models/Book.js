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
    resume: {
      type: DataTypes.TEXT,
    },
    year: {
      type: DataTypes.INTEGER,
    },
    author: {
      type: DataTypes.STRING,
    },
    editorial: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    discount_id: {
      type: DataTypes.INTEGER,
    }
  });

  return Book;
}