'use strict';

var React = require('react');

module.exports = React.createClass({
  render: function render(){
    return(
        <a href={this.props.destination} className="btn btn-block btn-social btn-facebook">
            <span className="fa fa-facebook"></span>
            {this.props.message}
        </a>
    )
  }
});
