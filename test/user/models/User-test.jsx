// Mocking window and document object:
//require('./dom-mocks')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var should = require('chai').should();
var React = require('react/addons');

describe.skip('User model TESTS', function() {
  it('should validate a local strategy property', validateLocalStrategyProperty);
  it('should validate a local strategy email', validateLocalStrategyEmail);
  it('should hash a password', hashPassword);
  it('should authenticate', authenticate);
  it('should find an unique username', findUniqueUserName);
  it('should generate random passphrase', generateRandomPassphrase);
  it('should check if the user is logged in', isLoggedIn);
  it('should inject the user in any request', injectUser);
  it('should save an Oauth user profile', saveOauthUserProfile);
});

function validateLocalStrategyProperty(){
  //TODO
}

function validateLocalStrategyEmail(){
  //TODO
}

function hashPassword(){
  //TODO
}

function findUniqueUserName(){
  //TODO
}

function generateRandomPassphrase(){
  //TODO
}

function isLoggedIn(){
  //TODO
}

function injectUser(){
  //TODO
}

function saveOauthUserProfile(){
  //TODO
}

function authenticate(){
  //TODO
}