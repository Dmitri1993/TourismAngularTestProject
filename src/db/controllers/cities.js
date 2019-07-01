(function(){
  'use strict';

  const City = require('../models/index').City;

  function findAll() {
    return City.findAll();
  }

  module.exports.findAll = findAll;
}());
