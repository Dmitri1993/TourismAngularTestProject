(function(){
  'use strict';

  const dotenv = require('dotenv');
  dotenv.config();

  module.exports = {
    googleNewsApi: process.env.GOOGLE_NEWS_API,
    googleNewsApiKey: process.env.GOOGLE_NEWS_API_KEY,
    googleSearchApi: process.env.GOOGLE_SEARCH_API,
    googleSearchApiKey: process.env.GOOGLE_SEARCH_API_KEY,
    googleSearchApiCXCode: process.env.GOOGLE_SEARCH_API_CX_CODE
  };
}());
