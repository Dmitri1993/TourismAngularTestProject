'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn('Cities', 'weatherURL', {
          type: Sequelize.STRING
        }, { transaction: t }),
        queryInterface.addColumn('Cities', 'country', {
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
    return queryInterface.removeColumn('weatherURL');
  }
};
