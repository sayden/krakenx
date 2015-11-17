'use strict';

var ArticleModel = require('./models/article');
var auth = require('../../config/auth');


module.exports = function (router) {

  var model = new ArticleModel();

  router.get('/', auth.isAuthenticated(), function (req, res) {
    res.render('articles/views/article', model);
  });

  router.get('/new', auth.isAuthenticated(), function(req, res){
    res.render(req.url, model);
  });
};
