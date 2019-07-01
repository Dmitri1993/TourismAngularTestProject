'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn('Countries', 'description', {
          type: Sequelize.STRING(100000)
        }, { transaction: t }),
        queryInterface.addColumn('Cities', 'description', {
          type: Sequelize.STRING(100000)
        }, { transaction: t }),
        queryInterface.addColumn('Sights', 'description', {
          type: Sequelize.STRING(100000)
        }, { transaction: t })
      ])
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('description');
  }
};
