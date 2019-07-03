'use strict';
const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Sight = sequelize.define('Sight', {
    id: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    longitude: DataTypes.STRING,
    latitude: DataTypes.STRING,
    images: Sequelize.ARRAY(Sequelize.TEXT),
    icon: DataTypes.STRING
  }, {
    tableName: 'Sights',
    timestamps: true
  });
  Sight.associate = function(models) {
    Sight.belongsTo(models.City, {as: 'cityId__al', foreignKey: 'cityId'})
    // associations can be defined here
  };
  return Sight;
};
