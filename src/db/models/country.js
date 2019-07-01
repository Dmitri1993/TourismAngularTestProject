'use strict';

module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Countries', {
    id: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    icon: DataTypes.STRING
  }, {
    tableName: 'Countries',
    timestamps: true
  });
  Country.associate = function(models) {
    Country.hasMany(models.Cities, {foreignKey: 'countryId'})
    // associations can be defined here
  };
  return Country;
};
