'use strict';

var jsdom = require('mocha-jsdom');
var should = require('chai').should();
var React = require('react/addons');
var Layout = require('../../modules/views/layout.jsx');

describe('Layout view TESTS', function(){
  jsdom({ skipWindowCheck: true });

  var TestUtils;

  beforeEach('Instance TestUtils', function(){
    TestUtils = React.addons.TestUtils;
  });

  it('should contain the word common html tags', function(){
    var layout = TestUtils.renderIntoDocument(<Layout />);

    TestUtils.findRenderedDOMComponentWithTag(layout, 'html');
    TestUtils.findRenderedDOMComponentWithTag(layout, 'head');
    TestUtils.findRenderedDOMComponentWithTag(layout, 'body');
  });
});