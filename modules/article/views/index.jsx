'use strict';

var React = require('react');
var Layout = require('./../../views/layout.jsx');
var ListItem = require('../components/ListItem.jsx');
var ArticleList = require('../components/ArticleList.jsx');
var TestButton = require('../../react-global-components/TestComponent.jsx');

var Store = require('../ArticlesStore.jsx');
var Actions = require('../ArticlesActions.jsx');
var Reflux = require('reflux');

module.exports = React.createClass({
  mixins:[ Reflux.connect(Store, 'articles') ],

  displayName: 'articleList',

  componentDidMount: function(){
    Actions.listArticles();
  },

  render: function render(){
    var articleList;
    if(this.state.articles){
      articleList = this.state.articles.map(function(article){
        return <ListItem article={article} key={article._id} />
      });
    } else {
      articleList = <div>Loading articles</div>;
    }

    return (
      <Layout {...this.props}>
        <h1>This is the article list view</h1>
        <TestButton />
        <p><a href="/user/home">User Home</a></p>
        <p><a href="/article">Articles Home</a></p>
        <p><a href="/article/new">New Article view</a></p>
        <div>
          {articleList}
        </div>
      </Layout>
    )
  }
});
