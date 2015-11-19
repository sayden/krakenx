// Mocking window and document object:
//require('./dom-mocks')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var should = require('chai').should();
var React = require('react/addons');

describe('Testing reusable bower_components between apps', function() {
  jsdom({ skipWindowCheck: true });

  var TestUtils;

  beforeEach('Instance TestUtils', function(){
    TestUtils = React.addons.TestUtils;
  });

  describe('Login bower_components', function(){
    it('Google button should contain expected title and destination',
      function(){
        var Google = require('../modules/components/GoogleButton.jsx');

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

    it('Facebook button should contain expected title and destination',
      function(){
        var Facebook = require('../modules/components/FacebookButton.jsx');

        var infoJson = {destination: "/login/auth", message:"Facebook"};
        var facebook = TestUtils.renderIntoDocument(
          <Facebook destination={infoJson.destination}
                    message={infoJson.message}
          />
        );

        var link = TestUtils.findRenderedDOMComponentWithTag(facebook, 'a');

        link.getDOMNode().textContent.should.contain(infoJson.message);
        link.getDOMNode().href.should.contain(infoJson.destination);
      }
    );
  });

});