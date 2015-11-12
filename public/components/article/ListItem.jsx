'use strict';

var React = require('react');

module.exports = React.createClass({
  render: function render(){
    return(
      <div>
        <h4>{this.props.title}</h4>
      </div>
    );
  }
});
