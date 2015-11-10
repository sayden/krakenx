'use strict';

var UserSchema = require('../../models/UserSchema');

module.exports = function(url, router, render){
  //TODO Check if user is authenticated

  router.get(url, render);
};