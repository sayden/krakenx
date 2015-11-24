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
      console.log(this.state.article);
    } else {
      article = <div>Loading article</div>;
    }

    return (
      <div>
        <h1>This is the article detail view</h1>
        <TestButton />
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
