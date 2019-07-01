'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('Cities', 'country')
      ])
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('country');
  }
};
