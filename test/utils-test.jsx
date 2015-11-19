'use strict';

var should = require('chai').should(),
    mocha = require('mocha');

describe.only('Utils library tests', function(){
  it('should return path with views syncronically', function(){
    var Utils = require('../lib/utils');

    var result =
      Utils.getViewsPath(__dirname + '/../modules', '/views');
    result.should.not.be.undefined;
    result.should.not.be.null;
    result.should.be.instanceOf(Array);
  });

  it('should return path with routes views syncronically', function(){
    var Utils = require('../lib/utils');

    var result = Utils.getViewsPath(__dirname + '/../modules', '/routes');
    result.should.not.be.undefined;
    result.should.not.be.null;
    result.should.be.instanceOf(Array);
  });

  it.only('should test', function(){
    var Utils = require('../lib/utils');
    var express = require('express');
    var router = express.Router();
    router = Utils.initRoutes(router);
    router.stack.should.be.instanceOf(Array);
    var routerStringified = JSON.stringify(router.stack);
    routerStringified.should.contain('login');
    routerStringified.should.contain('me');
    routerStringified.should.contain('article');
  });
});