var React = require('react');
var ListItem = require('./ListItem.jsx');

module.exports = React.createClass({
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