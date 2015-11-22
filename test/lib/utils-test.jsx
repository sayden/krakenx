'use strict';

var should = require('chai').should(),
    mocha = require('mocha'),
    Utils = require('../../lib/utils');

describe('Utils library tests', function(){
  it('should require every file in a path', requireInPath);
  it('should return path with views (glob)',getFilesInPath)
});

/**
 * should require every file in a path
 */
function requireInPath(){
  var express = require('express');
  var router = express.Router();
  router = Utils.initRoutes(router);
  router.stack.should.be.instanceOf(Array);
  var routerStringified = JSON.stringify(router.stack);
  routerStringified.should.contain('login');
  routerStringified.should.contain('me');
  routerStringified.should.contain('article');
}


/**
 * should return path with views syncronically (glob)
 */
function getFilesInPath(done){
  Utils.getFilesInPath('modules/**/views/*.jsx', function(result){
    result.should.not.be.undefined;
    result.should.not.be.null;
    result.should.be.instanceOf(Array);
    done();
  });

}