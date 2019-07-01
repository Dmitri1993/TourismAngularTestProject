'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn('Sights', 'cityId', {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'Cities'
            },
            key: 'id'
          },
          allowNull: false
        }, { transaction: t })
      ])
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('city');
  }
};
