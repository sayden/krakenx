'use strict';

var CRUD = function CRUD(){
  this.dbName = null;
};

CRUD.prototype.init = function(config){
  if(config !== undefined && config.dbName !== undefined){
    this.dbName = config.dbName;
  } else {
    throw new Error('A db name must be provided to use the library');
  }
};

CRUD.prototype.add = function(req, res){
  throw new Error('Add has not been overriden yet');
};

CRUD.prototype.remove = function(req, res){
  throw new Error('Remove has not been overriden yet');
};

CRUD.prototype.update = function(req, res){
  throw new Error('Update has not been overriden yet');
};

CRUD.prototype.get = function(req, res, next, id){
  throw new Error('Get has not been overriden yet');
};

CRUD.prototype.getAll = function(req, res){
  throw new Error('Get all has not been overriden yet');
};

module.exports = new CRUD();