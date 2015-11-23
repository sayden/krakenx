var React = require('react');
var ListItem = require('./ListItem.jsx');
var Reflux = require('reflux');
var Actions = require('../ArticlesActions.jsx');
var Store = require('../ArticlesStore.jsx');

module.exports = React.createClass({
  mixins:[Reflux.connect(Store, 'ArticlesStore')],

  render: function render(){
    var articleList = this.props.articles.map(function(article) {
      return <ListItem article={article} key={article.id} />
    });

    return(
      <div>
        {articleList}
      </div>
    );
  }
});