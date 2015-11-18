/*-------------------------------------------------------------------------------------------------------------------*\
 |  Copyright (C) 2015 PayPal                                                                                          |
 |                                                                                                                     |
 |  Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance     |
 |  with the License.                                                                                                  |
 |                                                                                                                     |
 |  You may obtain a copy of the License at                                                                            |
 |                                                                                                                     |
 |       http://www.apache.org/licenses/LICENSE-2.0                                                                    |
 |                                                                                                                     |
 |  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed   |
 |  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for  |
 |  the specific language governing permissions and limitations under the License.                                     |
 \*-------------------------------------------------------------------------------------------------------------------*/

'use strict';

var auth = require('../../../config/auth'),
    passport = require('passport');

module.exports = function (router) {

  router.get('/', auth.isAuthenticated(), function(req, res){
    res.render('user/views/user', {});
  });

  // route for logging out
  router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  router.get('/me', auth.isAuthenticated(), function(req, res){
    res.json({ id: req.user.id, username: req.user.username });
  });

  router.get('/login', function(req, res){
    //Include any error messages that come from the login process.
    var model = {};
    model.messages = req.flash('error');
    res.render('user/views/login', model);
  });



  // =====================================
  // GOOGLE ROUTES =======================
  // =====================================
  // send to google to do the authentication profile gets us their basic
  // information including their name email gets their emails
  router.get('/auth/google',
    passport.authenticate('google', {
      scope : ['profile', 'email']
    }));

  // the callback after google has authenticated the user
  router.get('/auth/google/callback',
    passport.authenticate('google', {
      successRedirect : '/user/#',
      failureRedirect : '/user/login'
    }));


  // =====================================
  // FACEBOOK ROUTES =====================
  // =====================================
  // send to google to do the authentication profile gets us their basic
  // information including their name email gets their emails
  router.get('/auth/facebook',
    passport.authenticate('facebook', {
      scope : ['email']
  }));

  // the callback after google has authenticated the user
  router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect : '/user/#',
      failureRedirect : '/user/login'
  }));
};
