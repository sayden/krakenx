'use strict';

var should = require('chai').should(),
    mocha = require('mocha');

describe('Utils library tests', function(){
  it('should return path with views syncronically', function(){
    var Utils = require('../lib/utils');

    var result =
      Utils.getViewsPath('/home/mariocaster/tmp/krakenx/public', '/views/');
    result.should.not.be.undefined;
    result.should.not.be.null;
    result.should.be.instanceOf(Array);
  });
});