var Reflux = require('reflux');
var ArticleActions = require('./ArticlesActions.jsx');

module.exports = Reflux.createStore({
  listenables:[ArticleActions],

  init: function(){
    //Store init
  },

  addArticle: function(article){
    //TODO Add Article
  },

  deleteArticle: function(id){
    //TODO Delete article
  },

  updateArticle: function(article){
    //TODO Update Article
  },

  listArticles: function(userId){
    //TODO List articles
  }
});