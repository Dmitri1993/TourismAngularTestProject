'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn('Cities', 'countryId', {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'Countries'
            },
            key: 'id'
          },
          allowNull: false
        }, { transaction: t })
      ])
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('country');
  }
};
