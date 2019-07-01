(function(){
  'use strict';

  const config = require('../../config/config');

  module.exports = {
    development: {
      username: config.database_username,
      password: config.database_password,
      database: config.database_database_name,
      host: config.database_host,
      ssl: true,
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          required: true
        }
      }
    },
    test: {
      username: config.database_username,
      password: config.database_password,
      database: config.database_database_name,
      host: config.database_host,
      ssl: true,
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          required: true
        }
      }
    },
    production: {
      username: config.database_username,
      password: config.database_password,
      database: config.database_database_name,
      host: config.database_host,
      ssl: true,
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          required: true
        }
      }
    }
  };
}());
