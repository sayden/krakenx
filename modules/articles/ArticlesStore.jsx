var Reflux = require('reflux');

module.exports = Reflux.createStore({

  OnAddArticle: function(data){
    console.log(data);
  }
});