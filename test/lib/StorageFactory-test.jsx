'use strict';

var mocha = require('mocha'),
  chai = require('chai'),
  should = chai.should(),
  expect = chai.expect,
  SF = require('../../lib/StorageFactory');


describe.only('StorageFactory Tests', function(){
  it('should allow every strategy to be registered', registerStrategy);
  it('should allow to active one of the registered strategies', selectStrategy);
  it('should show every strategy registered', showRegisteredStrategies);
  it('should remove a registered strategy', removeStrategy);
  it('should return a strategy', getStrategy);
  it('should return the active strategy', getActiveStrategy);
  afterEach(resetState);
});

function resetState(){
  SF.strategies = [];
}

function registerStrategy(){
  var strNumber = SF.strategies.length;
  SF.registerStrategy({});
  SF.strategies.length.should.be.greaterThan(strNumber);
}

function selectStrategy(){
  SF.registerStrategy({name:"mongo", id:1, active:false});
  SF.registerStrategy({name:"orient", id:2, active:false});
  SF.registerStrategy({name:"mysql", id:3, active:false});

  SF.strategies.length.should.be.equal(3);
  SF.strategies[0].name.should.be.equal('mongo');
  SF.strategies[0].active.should.be.false;

  SF.selectStrategy('mongo');
  SF.strategies[0].name.should.be.equal('mongo');
  SF.strategies[0].active.should.be.true;
}

function showRegisteredStrategies(){
  SF.registerStrategy({name:"Mongo"});
  SF.registerStrategy({name:"Orient"});

  var strategies = SF.showRegisteredStrategies();
  strategies.should.be.instanceOf(Array);
  strategies[0].should.be.equal('Mongo');
  strategies[1].should.be.equal('Orient');
}

function removeStrategy(){
  SF.registerStrategy({name:"mongo"});
  SF.registerStrategy({name:"orient"});
  SF.registerStrategy({name:"mysql"});

  SF.strategies.length.should.be.equal(3);

  SF.removeStragegy('mysql');
  SF.strategies.length.should.be.equal(2);
  SF.strategies.map(function(str){
    str.name.should.not.be.equal('mysql');
  });
}

function getStrategy(){
  SF.registerStrategy({name:"mongo", id:1});
  SF.registerStrategy({name:"orient", id:2});
  SF.registerStrategy({name:"mysql", id:3});

  SF.strategies.length.should.be.equal(3);
  var str = SF.getStrategy("mongo");
  str.id.should.be.equal(1);

  (function(){ SF.getStrategy('notFound') }).should.throw(Error);
}

function getActiveStrategy(){
  SF.registerStrategy({name:"mongo", id:1, active:true});
  SF.registerStrategy({name:"orient", id:2, active:false});
  SF.registerStrategy({name:"mysql", id:3, active:false});

  SF.strategies.length.should.be.equal(3);
  SF.getActiveStrategy().name.should.be.equal('mongo');
  SF.getActiveStrategy().active.should.be.true;
}