(function(){
  'use strict';

  const dotenv = require('dotenv');
  dotenv.config();

  module.exports = {
    port: process.env.PORT,
    prod_url: process.env.PROD_URL,
    googleNewsApiKey: process.env.GOOGLE_NEWS_API_KEY,
    googleSearchApi: process.env.GOOGLE_SEARCH_API,
    googleSearchApiKey: process.env.GOOGLE_SEARCH_API_KEY,
    googleSearchApiCXCode: process.env.GOOGLE_SEARCH_API_CX_CODE
  };
}());
