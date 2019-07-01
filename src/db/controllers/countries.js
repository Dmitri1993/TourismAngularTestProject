(function(){
  'use strict';

  const Country = require('../models/index').Country;

  function findAll() {
    return Country.findAll();
  }

  module.exports.findAll = findAll;
}());
