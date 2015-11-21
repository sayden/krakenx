// Mocking window and document object:
//require('./dom-mocks')('<html><body></body></html>');

'use strict';

var jsdom = require('mocha-jsdom');
var should = require('chai').should();
var React = require('react/addons');

describe('GoogleButton TESTS', function() {
  jsdom({ skipWindowCheck: true });

  var TestUtils;

  beforeEach('Instance TestUtils', function(){
    TestUtils = React.addons.TestUtils;
  });

  it('should contain expected title and destination',
    function(){
      var Google = require('../../../modules/react-global-components/loginButtons/GoogleButton.jsx');

      var infoJson = {destination: "/login/auth", message:"Google"};
      var google = TestUtils.renderIntoDocument(
        <Google destination={infoJson.destination}
                message={infoJson.message}
        />
      );

      var link = TestUtils.findRenderedDOMComponentWithTag(google, 'a');

      link.getDOMNode().textContent.should.contain(infoJson.message);
      link.getDOMNode().href.should.contain(infoJson.destination);
    }
  );
});