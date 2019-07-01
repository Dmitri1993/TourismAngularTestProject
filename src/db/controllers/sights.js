(function(){
  'use strict';

  const Sight = require('../models/index').Sight;

  function findAll() {
    return Sight.findAll();
  }

  module.exports.findAll = findAll;
}());
