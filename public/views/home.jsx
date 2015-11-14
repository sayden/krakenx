'use strict';

var React = require('react');
var Layout = require('./layout.jsx');

module.exports = React.createClass({
  render: function render(){
    return (
        <div>
          <h1>This is the public home view</h1>
          <p><a href="/login">Login</a></p>
          <p><a href="/user">User Home</a></p>
        </div>
    )
  }
});