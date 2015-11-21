/*global describe:false, it:false, beforeEach:false, afterEach:false*/

'use strict';

var chai = require('chai'),
    should = chai.should(),
    React = require('react/addons');

describe('ArticleList TEST', function(){
  it('should contain the 2 h4 "title1" and "title2" tags', function(){
    var ArticleList = require('../../../modules/articles/components/ArticleList.jsx');
    var TestUtils = React.addons.TestUtils;

    var articles = [
      {title: "title1", id:1},
      {title: "title2", id:2}
    ];

    var list = TestUtils.renderIntoDocument(
      <ArticleList articles={articles} />
    );

    var titles = TestUtils.scryRenderedDOMComponentsWithTag(list, 'h4');

    titles[0].getDOMNode().textContent.should.contain('title1');
    titles[1].getDOMNode().textContent.should.contain('title2');
  });

});
