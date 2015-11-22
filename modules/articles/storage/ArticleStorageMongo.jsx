'use strict';

var CRUD = require('../../../lib/CRUDclient');
var Article = require('../models/ArticleMongoose');
var mongoose = require('mongoose');


CRUD.init({dbName:'articles'});


CRUD.add = function (req, res) {
  var article = new Article(req.body);
  article.user = req.user;

  article.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(article);
    }
  });
};


CRUD.get = function(req, res, next, id){

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Article is invalid'
    });
  }

  Article.findById(id).populate('user', 'displayName')
    .exec(function (err, article) {
      if (err) {
        return next(err);
      } else if (!article) {
        return res.status(404).send({
          message: 'No article with that identifier has been found'
        });
      }
      req.article = article;
      next();
    });
};


CRUD.getAll = function(req, res){
  Article.find().sort('-created').populate('user', 'displayName').exec(function (err, articles) {
    if (err) {
      return res.status(400).send({
        message: 'Error trying to retrieve the list'
      });
    } else {
      res.json(articles);
    }
  });
};


CRUD.remove = function(req, res){
  var article = req.article;

  article.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: 'Error trying to remove article'
      });
    } else {
      res.json(article);
    }
  });
};

CRUD.update = function(req, res){
  var article = req.article;

  article.title = req.body.title;
  article.content = req.body.content;

  article.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: 'Error trying to update'
      });
    } else {
      res.json(article);
    }
  });
};

module.exports = CRUD;