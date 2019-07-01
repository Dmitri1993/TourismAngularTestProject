'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(() => {
      return Promise.all([
        queryInterface.removeColumn('Countries', 'description'),
        queryInterface.removeColumn('Cities', 'description'),
        queryInterface.removeColumn('Sights', 'description')
      ])
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('description');
  }
};
