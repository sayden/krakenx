'use strict';

var React = require('react');

module.exports = React.createClass({
  render: function render(){
    var articleLink = "/article/"+this.props.article._id;
    return(
      <div className="col-md-12">
        <h4 className="col-md-11"><a href={articleLink}>{this.props.article.title}</a></h4>
        <div className="col-md-1"><button type="button" className="btn btn-danger">Delete</button></div>
      </div>
    );
  }
});
