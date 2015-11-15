'use strict';

/**
 * A helper method to determine if a user has been authenticated, and if they have the right role.
 * If the user is not known, redirect to the login page. If the role doesn't match, show a 403 page.
 * @param role The role that a user should have to pass authentication.
 */
function isAuthenticated() {
  return function (req, res, next) {
    if (!req.isAuthenticated()) {
      //If the user is not authorized, save the location that was being accessed so we can redirect afterwards.
      req.session.goingTo = req.url;
      res.redirect('/login');
    } else {
      next();
    }
  }
}

exports.isAuthenticated = isAuthenticated;