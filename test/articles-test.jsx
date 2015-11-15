/*global describe:false, it:false, beforeEach:false, afterEach:false*/

'use strict';

var kraken = require('kraken-js'),
    express = require('express'),
    path = require('path'),
    request = require('supertest'),
    chai = require('chai'),
    should = chai.should(),
    React = require('react/addons'),
    jsdom = require('mocha-jsdom');


describe.skip('Articles API testing: ', function () {
  jsdom({skipWindowCheck: true});
  var app, mock;

  beforeEach(function (done) {
    app = express();
    app.on('start', done);
    app.use(kraken({
      basedir: path.resolve(__dirname, '..')
    }));

    mock = app.listen(1337);
  });


  afterEach(function (done) {
    mock.close(done);
  });


  it('should redirect when trying to get an api endpoint without logging in"',
    function (done) {
      request(mock)
        .get('/api/article')
        .expect(302)

        .end(function (err, res) {
          res.text.should.contain('/login');
          done(err);
        });
    });
});

describe('Article components', function(){
  it('ListItem should contain text "title" in title prop', function() {
    var ListItem = require('../public/views/articles/components/ListItem.jsx');
    var TestUtils = React.addons.TestUtils;

    var articleJson = {title: "title1", id:1};
    var myDiv = TestUtils.renderIntoDocument(
      <ListItem article={articleJson} />
    );

    var divText = TestUtils.findRenderedDOMComponentWithTag(myDiv, 'h4');

    divText.getDOMNode().textContent.should.contain(articleJson.title);
  });

  it('ArticleList should contain the 2 h4 "title1" and "title2" tags', function(){
    var ArticleList = require('../public/views/articles/components/ArticleList.jsx');
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
