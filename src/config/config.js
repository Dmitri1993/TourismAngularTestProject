(function(){
  'use strict';

  const dotenv = require('dotenv');
  dotenv.config();

  // console.log(process.env);

  module.exports = {
    port: process.env.PORT,
    prod_url: process.env.PROD_URL,
    googleNewsApi: process.env.GOOGLE_NEWS_API,
    googleNewsApiKey: process.env.GOOGLE_NEWS_API_KEY,
    googleSearchApi: process.env.GOOGLE_SEARCH_API,
    googleSearchApiKey: process.env.GOOGLE_SEARCH_API_KEY,
    googleSearchApiCXCode: process.env.GOOGLE_SEARCH_API_CX_CODE,
    database_host: process.env.DATABASE_HOST,
    database_port: process.env.DATABASE_PORT,
    database_username: process.env.DATABASE_USER,
    database_password: process.env.DATABASE_PASSWORD,
    database_database_name: process.env.DATABASE_DATABASE_NAME
  };
}());
