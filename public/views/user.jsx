'use strict';

var React = require('react');
var Layout = require('./layout.jsx');

module.exports = React.createClass({
  render: function render(){
    return (
      <Layout {...this.props}>
        <h1>This is the private home view</h1>
      </Layout>
    )
  }
});