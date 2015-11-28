var Reflux = require('reflux');
var ArticleActions = require('./ArticlesActions.jsx');

var _articles = [];

var Store = Reflux.createStore({
  listenables:[ArticleActions],

  addArticle: function(article){
    qwest.post('http://localhost:8000/api/article', article)
      .then(function(xhr, data){
          _articles.push(data);
          Store.trigger(_articles);
      });
  },

  getArticle: function(id){
    qwest.get('http://localhost:8000/api/article/' + id)
      .then(function(xhr, data){
        _articles = [data];
        Store.trigger(data);
      }).catch(function(xhr, data, err){
        console.error('Error trying to get article', err);
      })
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
    qwest.get('http://localhost:8000/api/article')
    .then(function(xhr, data){
      _articles = _articles.concat(data);
      Store.trigger(_articles);
    }).catch(function(xhr, data, err){
      console.error('Failing when retrieving list of articles', xhr, data, err);
    });
  }
});

module.exports = Store;
