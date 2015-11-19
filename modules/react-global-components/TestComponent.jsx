'use strict';

var React = require('react');

module.exports = React.createClass({
  OnClick: function OnClick(){
    alert('Clicked me');
  },

  render: function render(){
    return(
      <button onClick={this.OnClick}>Test Button</button>
    )
  }
});