'use strict';

var React = require('react');
var Layout = require('../../views/layout.jsx');

module.exports = React.createClass({

  displayName: 'user',

  render: function render(){
    return (
      <Layout {...this.props}>
        <div>
          <h1>This is the public home view</h1>
          <p><a href="/login">Login</a></p>
          <p><a href="/user/#">User Home</a></p>
          <p><a href="/article">Articles Home</a></p>
        </div>
      </Layout>
    )
  }
});