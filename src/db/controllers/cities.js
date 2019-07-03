(function(){
  'use strict';

  const City = require('../models/index').City;
  const Country = require('../models/index').Country;
  const Sight = require('../models/index').Sight;

  function findAll() {
    return City.findAll({
      include: [
        {
          model: Country,
          as: 'countryId__al',
          attributes: ['title']
        }
      ]
    });
  }

  module.exports.findAll = findAll;
}());
