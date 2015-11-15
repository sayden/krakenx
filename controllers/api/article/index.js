'use strict';

//var ArticleModel = require('../../../models/article');
var auth = require('../../../routes/strategies/auth');


module.exports = function (router) {

  //var model = new ArticleModel();

  router.get('/', auth.isAuthenticated(), function (req, res) {
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
