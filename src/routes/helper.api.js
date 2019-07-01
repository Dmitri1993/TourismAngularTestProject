(function() {
  'use strict';

  const express = require('express');
  const router = express.Router();
  const axios = require('axios');

  const config = require('../config/config');

  const Countries = require('../db/controllers/countries');

  router.get('/getalldata', function(req, res) {
    try {
      return Promise.all([
        Countries.findAll()
      ])
        .then(data => {
          console.log('data', data);
          res.send(data)
        })
        .catch(err => {
          console.log('err', err);
          Promise.reject(err);
        })
    } catch (e) {
      console.log('error', e);
      Promise.reject(e);
    }
  });

  router.get('/getnews', function (req, res) {
    try {
      let query = req.query.query;
      axios.get(config.googleNewsApi + 'q=' + query + '&sortBy=publishedAt&apiKey=' + config.googleNewsApiKey)
        .then(response => {
          if (
            response.data.status != 'ok' ||
            response.data.articles == null
          ) {
            return Promise.reject(response);
          }

          res.json(response.data.articles.filter(
            article =>
              article.urlToImage &&
              article.description &&
              article.title
          ));
        })
        .catch(function(error) {
          console.log('error', error);
          res.send(error.status).send(error.message);
        });
    } catch (e) {
      return Promise.reject(e);
    }
  });

  router.get('/search', function (req, res) {
    try {
      let query = req.query.query;

      getArticlesAttay(query)
        .then(result => {
          res.json(result);
        })
        .catch(function(ex) {
          console.log('ex', ex);
          res.status(ex.code).send(ex);
        })
    } catch(e) {
      console.log('error message', e);
      return Promise.reject(e);
    }
  });

  function getArticlesAttay (query){
    let articlesArray = [];
    let promise = Promise.resolve();
    for (let i = 0; i < 3; i++) {
      promise = promise
        .then(() => {
          return getArticles(query, i * 10 + 1);
        })
        .then(articles => {
          articlesArray = articlesArray.concat(articles);
          return articlesArray;
        })
        .catch(function(exc) {
          return Promise.reject(exc);
        });
      console.log('---------------------------------------------------------------------');
    }
    return promise;
  }

  async function getArticles (query, num) {
    try {
      console.log(config.googleSearchApi +
        'cx=' + config.googleSearchApiCXCode +
        '&key=' + config.googleSearchApiKey +
        '&q=' + encodeURI(query) +
        '&sort=date' +
        '&start=' + num);

      let response = await axios.get(
        config.googleSearchApi +
        'cx=' + config.googleSearchApiCXCode +
        '&key=' + config.googleSearchApiKey +
        '&q=' + encodeURI(query) +
        '&sort=date' +
        '&start=' + num
      );
      console.log('result array = ', response.data.items.filter(article =>
        article.title &&
        article.snippet &&
        article.link &&
        article.pagemap &&
        (
          (
            article.pagemap.webpage &&
            article.pagemap.webpage[0] &&
            article.pagemap.webpage[0].image
          ) ||
          (
            article.pagemap &&
            article.pagemap.cse_image &&
            article.pagemap.cse_image[0]
          )

        )
      ));

      return response.data.items.filter(article =>
        article.title &&
        article.snippet &&
        article.link &&
        article.pagemap &&
        (
          (
            article.pagemap.webpage &&
            article.pagemap.webpage[0] &&
            article.pagemap.webpage[0].image
          ) ||
          (
            article.pagemap &&
            article.pagemap.cse_image &&
            article.pagemap.cse_image[0]
          )

        )
      ).map(art => {
        let imageURL =
          art.pagemap.webpage &&
          art.pagemap.webpage[0] &&
          art.pagemap.webpage[0].image ?
            art.pagemap.webpage[0].image :
            art.pagemap.cse_image[0].src;
        return {
          title: art.title,
          snippet: art.snippet,
          link: art.link,
          imageURL: imageURL
        }
      });
    } catch (error) {
      console.log('error', error);
      return Promise.reject({
        code: error.response.data.error.code,
        reason: error.response.data.error.errors[0].reason,
        message: error.response.data.error.errors[0].message
      });
    }
  }

  module.exports = router;
}());
