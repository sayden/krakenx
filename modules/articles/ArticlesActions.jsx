var Reflux = require('reflux');

var Actions = Reflux.createActions([
  'addArticle',
  'updateArticle',
  'deleteArticle',
  'listArticles',
  'getArticle'
]);

module.exports = Actions;