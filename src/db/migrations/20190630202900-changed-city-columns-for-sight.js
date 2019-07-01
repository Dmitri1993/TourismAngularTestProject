'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(() => {
      return Promise.all([
        queryInterface.removeColumn('Sights', 'city')
      ])
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('city');
  }
};
