'use strict';

var jsdom = require('mocha-jsdom');
var should = require('chai').should();
var React = require('react/addons');
var Home = require('../../modules/views/home.jsx');

describe('Home view TESTS', function(){
  jsdom({ skipWindowCheck: true });

  var TestUtils;

  beforeEach('Instance TestUtils', function(){
    TestUtils = React.addons.TestUtils;
  });

  it('should contain the word "public"', function(){
    var home = TestUtils.renderIntoDocument(<Home />);

    var link = TestUtils.findRenderedDOMComponentWithTag(home, 'h1');

    link.getDOMNode().textContent.should.contain('public');
  });
});