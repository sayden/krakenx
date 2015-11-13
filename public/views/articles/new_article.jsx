'use strict';

var React = require('react');
var Layout = require('../layout.jsx');

module.exports = React.createClass({
  render: function render(){
    return (
      <Layout {...this.props}>
        <h1>New Article</h1>
        <form className="col-sm-8">
          <div className="form-group">
            <label for="title">Title</label>
            <input type="text" className="form-control" id="title" placeholder="title" />
          </div>
          <div className="form-group">
            <label for="textarea">Article body</label>
            <textarea className="form-control" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <div className="col-md-12">
          <h4>Links</h4>
          <a href="/article">Article home</a>
        </div>
      </Layout>
    )
  }
});
