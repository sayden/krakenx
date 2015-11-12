'use strict';

var React = require('react');
var Layout = require('./layout.jsx');

module.exports = React.createClass({
  render: function render(){
    return (
      <Layout {...this.props}>
        <h1>New Article</h1>
        <div>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Artitle title" />
          </div>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Article body" />
          </div>
          <div className="input-group">
            <button type="button" className="btn btn-primary">Save article</button>
          </div>
        </div>
      </Layout>
    )
  }
});