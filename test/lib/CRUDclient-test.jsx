'use strict';

var mocha = require('mocha'),
    chai = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    CRUD = require('../../lib/CRUDclient');

describe('CRUD client TESTS', function(){
  before(prepareCRUD);
  it('should init the library', initLibrary);
  it('should add a json', add);
  it('should update something', update);
  it('should delete something using an id', remove);
  it('should get an object using an id', get);
  it('should get the entire list of objects', getObjectList);
});

/**
 * should init the library
 */
function initLibrary(){
  var dbName = 'test';
  CRUD.init({dbName:dbName});
  CRUD.dbName.should.be.equal(dbName);
  (function(){ CRUD.init() }).should.throw(Error);
  (function(){ CRUD.init({}) }).should.throw(Error);
}

/**
 * Used to init the CRUD library before any execution
 */
function prepareCRUD(){
  CRUD.init({dbName:'test'});
}

/**
 * should get the entire list of objects
 */
function getObjectList(){
  (function(){CRUD.getAll(1)}).should.throw(Error);

  //Override the functionality
  CRUD.getAll = function(req, res) {
    var id = req.data.id;
    var possibleResults = {
      1: [{a: "A", b: "B"}, {a: "A", b: "B"}, {a: "A", b: "B"}],
      2: [{a: "A", b: "B"}],
      3: [{a: "A", b: "B"}]
    };

    return possibleResults[id];
  };

  //Check
  CRUD.getAll({data:{id:1}}, null).should.be.instanceOf(Array);
  CRUD.getAll({data:{id:1}}, null).length.should.be.greaterThan(0);
  CRUD.getAll({data:{id:1}}, null)[0].a.should.be.equal("A");

}

/**
 * should get an object using an id
 */
function get(){
  (function(){CRUD.get(1)}).should.throw(Error);

  //Override the functionality
  CRUD.get = function(req, res, next, id){
    return {id:id};
  };

  //Check
  var result = CRUD.get({}, null, null, 1);
  result.id.should.not.be.undefined;
  result.id.should.be.equal(1);
}

/**
 * should delete something using an id
 */
function remove(){
  (function(){CRUD.remove(1)}).should.throw(Error);
}

/**
 * should update something
 */
function update(){
  (function(){CRUD.update({},1)}).should.throw(Error);
}

/**
 * should add a json
 */
function add(){
  (function(){CRUD.add({}, 1)}).should.throw(Error);
}