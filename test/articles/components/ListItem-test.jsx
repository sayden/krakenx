'use strict';

var kraken = require('kraken-js'),
  express = require('express'),
  path = require('path'),
  request = require('supertest'),
  chai = require('chai'),
  should = chai.should(),
  React = require('react/addons'),
  jsdom = require('mocha-jsdom');

describe('ListItem TESTS', function() {
  it('should contain text "title" in title prop', function () {
    var ListItem = require('../../../modules/articles/components/ListItem.jsx');
    var TestUtils = React.addons.TestUtils;

    var articleJson = {title: "title1", id: 1};
    var myDiv = TestUtils.renderIntoDocument(
      <ListItem article={articleJson} />
    );

    var divText = TestUtils.findRenderedDOMComponentWithTag(myDiv, 'h4');

    divText.getDOMNode().textContent.should.contain(articleJson.title);
  });
});