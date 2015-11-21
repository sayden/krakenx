// Mocking window and document object:
//require('./dom-mocks')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var should = require('chai').should();
var React = require('react/addons');

describe('FacebookButton TESTS', function() {
  jsdom({ skipWindowCheck: true });

  var TestUtils;

  beforeEach('Instance TestUtils', function(){
    TestUtils = React.addons.TestUtils;
  });

  it('should contain expected title and destination',
    function(){
      var Facebook = require('../../../modules/react-global-components/loginButtons/FacebookButton.jsx');

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