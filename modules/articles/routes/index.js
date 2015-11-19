'use strict';

var auth = require('../../../config/auth');


module.exports = function (router) {

  router.get('/article', auth.isAuthenticated(), function (req, res) {
    res.render('articles/views/article', {});
  });

  router.get('/article/new', auth.isAuthenticated(), function(req, res){
    res.render('/article/new', {});
  });

  router.get('/api/article', auth.isAuthenticated(), function (req, res) {
    res.json([
      {
        title:'A title',
        desc: 'A Desc',
        created: 'A Date'
      },
      {
        title:'A title',
        desc: 'A Desc',
        created: 'A Date'
      }
    ]);
  });
};
