(function(){
  'use strict';

  const Country = require('../models/country');

  function findAll() {
    console.log('------ findAll ------');
    console.log('Country', Country);
    return Country.findAll();
  }

  module.exports.findAll = findAll;
}());
