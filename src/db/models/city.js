'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    id: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: DataTypes.STRING,
    weatherURL: DataTypes.STRING,
    description: DataTypes.STRING,
    icon: DataTypes.STRING
  }, {
    tableName: 'Cities',
    timestamps: true
  });
  City.associate = function(models) {
    City.hasMany(models.Sight, {foreignKey: 'cityId'}),
    City.belongsTo(models.Country, {as: 'countryId__al', foreignKey: 'countryId'})
    // associations can be defined here
  };
  return City;
};
