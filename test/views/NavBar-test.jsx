'use strict';

var jsdom = require('mocha-jsdom');
var should = require('chai').should();
var React = require('react/addons');
var NavBar = require('../../modules/views/NavBar.jsx');

describe('NavBar TESTS', function(){
  jsdom({ skipWindowCheck: true });

  var TestUtils;

  beforeEach('Instance TestUtils', function(){
    TestUtils = React.addons.TestUtils;
  });

  it('should contain the word "Kraken-X"', function(){
    var layout = TestUtils.renderIntoDocument(<NavBar />);

    var link = TestUtils.findRenderedDOMComponentWithClass(layout, 'navbar-brand');

    link.getDOMNode().textContent.should.contain('Kraken');
  });
});