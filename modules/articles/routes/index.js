'use strict';

var auth = require('../../../lib/auth');
var Article = require('../models/article');


module.exports = function (router) {

  router.get('/article', auth.isAuthenticated(), function (req, res) {
    res.render('articles/views/article', {});
  });

  router.get('/article/new', auth.isAuthenticated(), function(req, res){
    res.render('/article/new', {});
  });

  router.get('/api/article', auth.isAuthenticated(), Article.list);
  router.post('/api/article', auth.isAuthenticated(), Article.create);

  router.get('/api/article/:articleId', auth.isAuthenticated(), Article.articleByID);
  router.put('/api/article/:articleId', auth.isAuthenticated(), Article.update);
  router.delete('/api/article/articleId', auth.isAuthenticated(), Article.delete);

};
