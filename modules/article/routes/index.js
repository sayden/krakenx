'use strict';

var auth = require('../../../lib/auth');
var Article = require('../models/ArticleMongoose');
var express = require('express');

module.exports = function (app) {

  app.get('/article', auth.isAuthenticated(), function (req, res) {
    res.render('article/views/index', {});
  });

  app.get('/article/new', auth.isAuthenticated(), function(req, res){
    res.render('/article/new', {});
  });

  app.get('/article/:id', auth.isAuthenticated(), function(req, res){
    res.render('/article/:id', {});
  });

  var apiRouter = express.Router();

  apiRouter.param('id', Article.articleByID);

  apiRouter.route('/:id')
    .all(auth.isAuthenticated())
    .get(Article.read)
    .put(Article.update)
    .delete(Article.delete);

  apiRouter.route('/')
    .all(auth.isAuthenticated())
    .get(Article.list)
    .post(Article.create);

  app.use('/api/article', apiRouter);
};
