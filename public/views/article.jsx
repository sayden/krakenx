'use strict';

var React = require('react');
var Layout = require('./layout.jsx');
var ListItem = require('./articles/components/ListItem.jsx');

module.exports = React.createClass({
  render: function render(){
    return (
      <Layout {...this.props}>
        <h1>This is the article list view</h1>
        <p><a href="/login">Login</a></p>
        <p><a href="/user/home">User Home</a></p>
        <p><a href="/article">Articles Home</a></p>
        <p><a href="/article/new">New Article view</a></p>
        <div>
          <ListItem title="Test" />
          <ListItem title="Test" />
          <ListItem title="Test" />
        </div>
      </Layout>
    )
  }
});
