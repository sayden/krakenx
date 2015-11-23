var Reflux = require('reflux');
var ArticleActions = require('./ArticlesActions.jsx');

var _articles = [];

var Store = Reflux.createStore({
  listenables:[ArticleActions],

  init: function(){
    this.listArticles()
  },

  addArticle: function(article){
    qwest.post('http://localhost:8000/api/article', article)
      .then(function(xhr, data){
          console.log('Article added');
          _articles.push(data);
          Store.trigger(_articles);
      });
  },

  deleteArticle: function(id){
    qwest.delete('http://localhost:8000/api/article', id)
      .then(function(xhr, data){
        Store.listArticles();
      });
  },

  updateArticle: function(article){
    qwest.post('http://localhost:8000/api/article', article)
      .then(function(xhr, data){
        Store.listArticles();
      });
  },

  listArticles: function(){
    qwest.get('http://localhost:8000/api/article', function(xhr, data){
      _articles.concat(data);
      Store.trigger(_articles);
    });
  }
});

module.exports = Store;