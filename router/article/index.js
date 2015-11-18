'use strict';

var auth = require('../../config/auth');


module.exports = function (router) {

  router.get('/', auth.isAuthenticated(), function (req, res) {
    res.render('articles/views/article', {});
  });

  router.get('/new', auth.isAuthenticated(), function(req, res){
    res.render('/article/new', {});
  });
};
