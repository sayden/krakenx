'use strict';

var React = require('react');
var Layout = require('./../../views/layout.jsx');
var ListItem = require('../components/ListItem.jsx');
var TestButton = require('../../react-global-components/TestComponent.jsx');

var Store = require('../ArticlesStore.jsx');
var Actions = require('../ArticlesActions.jsx');
var Reflux = require('reflux');

module.exports = React.createClass({
  mixins:[ Reflux.connect(Store, 'article') ],

  displayName: 'articleList',

  componentDidMount: function(){
    Actions.getArticle(this.props.params.id);
  },

  render: function render(){
    var article;
    if(this.state.article){
      article =
        <div>
          <h1>{this.state.article.title}</h1>
          <p>{this.state.article.content}</p>
        </div>;
    } else {
      article = <div>Loading article</div>;
    }

    return (
      <div>
        <h3>Article view</h3>
        <p><a href="/user/home">User Home</a></p>
        <p><a href="/article">Articles Home</a></p>
        <p><a href="/article/new">New Article view</a></p>
        <div>
          {article}
        </div>
      </div>
    )
  }
});
