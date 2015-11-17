'use strict';

var React = require('react');
var Layout = require('./../../views/layout.jsx');
var ListItem = require('./../components/ListItem.jsx');

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
          <ListItem article={ {title:"Test", id:1} } />
          <ListItem article={ {title:"Test2", id:2} } />
          <ListItem article={ {title:"Test3", id:3} } />
        </div>
      </Layout>
    )
  }
});
