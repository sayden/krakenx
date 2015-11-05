'use strict';

var React = require('react');

module.exports = React.createClass({
  onButtonClick: function(){
    //TODO Make a server call to login with this type of login button
  },

  render: function render(){
    return(
        <a className="btn btn-block btn-social btn-twitter">
            <span className="fa fa-twitter"></span>
                Sign in with Twitter
        </a>
    )
  }
});
