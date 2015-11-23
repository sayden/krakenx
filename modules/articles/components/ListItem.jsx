'use strict';

var React = require('react');

module.exports = React.createClass({
  render: function render(){
    return(
      <div className="col-md-12">
        <h4 className="col-md-8">{this.props.article.title}</h4>
        <div className="col-md-4">Delete</div>
      </div>
    );
  }
});
