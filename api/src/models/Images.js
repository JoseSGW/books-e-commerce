const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  const Images = sequelize.define('images', {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Images;
}



