'use strict';

var CRUD = require('../storage/ArticlesStorageFactory.jsx')
  .getStorageStrategy();

module.exports = CRUD;