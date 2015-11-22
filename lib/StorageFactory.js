'use strict';

var StorageFactory = {};

StorageFactory.strategies = [];

StorageFactory.registerStrategy = function(strategy){
  this.strategies.push(strategy);
};

StorageFactory.showRegisteredStrategies = function(){
  return this.strategies.map(function(strategy){
    return strategy.name;
  });
};

StorageFactory.removeStragegy = function(name){
  this.strategies = this.strategies.filter(function(str){
    if(str.name !== name) return str;
  });

  return this.strategies;
};

StorageFactory.getStrategy = function(name){
  var result = this.strategies.filter(function(str){
    if(str.name === name) return str;
  });

  if(result instanceof Array && result.length > 0){
    return result[0];
  } else {
    throw new Error('Trying to get or find the strategy');
  }
};

StorageFactory.selectStrategy = function(name){
  var strategyExists = exists(name);
  if(strategyExists){
    this.strategies.forEach(function(str){
      str.active = str.name === name
    });
  } else {
    throw new Error('There is no strategy with the name: ' + name);
  }
};

StorageFactory.getActiveStrategy = function(){
  var activeStrategy = this.strategies.filter(function(str){
    if(str.active === true){
      return str;
    }
  });

  if(activeStrategy.length === 1){
    return this.strategies[0];
  } else {
    throw new Error('Error retrieving active strategy. More than one strategy '+
      'activated');
  }
};

function exists (name){
  var results = StorageFactory.strategies.filter(function(str){
    if(str.name === name){
      return str;
    }
  });

  return results.length > 0;
}

module.exports = StorageFactory;