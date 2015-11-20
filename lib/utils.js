'use strict';

var fs = require('fs');
var path = require('path');

var walk = function(dir, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function(file) {
      file = path.resolve(dir, file);
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

function getViewsPath(path, searchString){
  var result;

  walk(path, function(err, results){
    result = results.filter(function(path){
      if(path.match(searchString)) return path;
    })
    .map(function(path){
      return path.substring(0, path.indexOf(searchString) + 7);
    })
    .filter(function(item, i ,ar){
      return ar.indexOf(item) === i;
    });
  });

  while(result === undefined){
    require('deasync').runLoopOnce();
  }

  return result;
}


function initRoutes(router){
  var routes = getViewsPath(__dirname + '/../modules', '/routes/');
  routes.forEach(function(route){
    require(route + '/index.js')(router);
  });

  return router;
}

module.exports.initRoutes = initRoutes;
module.exports.getViewsPath = getViewsPath;