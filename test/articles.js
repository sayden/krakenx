/*global describe:false, it:false, beforeEach:false, afterEach:false*/

'use strict';


var kraken = require('kraken-js'),
    express = require('express'),
    path = require('path'),
    request = require('supertest'),
    chai = require('chai'),
    should = chai.should();


describe('Articles API testing: ', function () {

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


  it('should get a redirection when trying to get an api endpoint without loggin"',
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
