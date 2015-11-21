'use strict';

var fs = require('fs');
var path = require('path');
var glob = require('glob');

/**
 * Deprecated, use glob instead
 * @param dir
 * @param done
 */
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

/**
 * Deprecated, use glob instead
 * @param path
 * @param searchString
 * @returns {*}
 */
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

/**
 * Used to require all routes within index.js files of every 'route' that is
 * contained in each module folder
 */
function initRoutes(router){
  var routes = getFilesInPathSync('modules/*/routes');
  routes.forEach(function(route){
    require('../' + route + '/index.js')(router);
  });

  return router;
}

function getFilesInPathSync(pattern){
  var result;

  getFilesInPath(pattern, function(files){
    result = files;
  });

  while(result === undefined){
    require('deasync').runLoopOnce();
  }

  return result;
}

function getFilesInPath(pattern, callback){
  glob(pattern, function(err, files){
    if(err){
      callback(new Error('Error trying to retrieve files'));
    } else {
      callback(files);
    }
  });
}

module.exports = {
  initRoutes:         initRoutes,
  getFilesInPath:     getFilesInPath,
  getViewsPath:       getViewsPath,
  getFilesInPathSync: getFilesInPathSync
};