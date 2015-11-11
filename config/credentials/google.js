var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
  User = require('../../models/UserSchema'),
  googleConfigAuth = require('./config'),
  auth = require('../../routes/strategies/auth');

module.exports = function(passport) {

  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  // =========================================================================
  // GOOGLE ==================================================================
  // =========================================================================
  passport.use(new GoogleStrategy({

      clientID            : googleConfigAuth.google.clientId,
      clientSecret        : googleConfigAuth.google.clientSecret,
      callbackURL         : googleConfigAuth.google.callbackURL,
      returnURL           : "/",
      passReqToCallback   : true

    },
    function(req, accessToken, refreshToken, profile, done) {
      // Set the provider data and include tokens
      var providerData = profile._json;
      providerData.accessToken = accessToken;
      providerData.refreshToken = refreshToken;

      // Create the user OAuth profile
      var providerUserProfile = {
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        displayName: profile.displayName,
        email: profile.emails[0].value,
        username: profile.username,
        profileImageURL: (providerData.picture) ? providerData.picture : undefined,
        provider: 'google',
        providerIdentifierField: 'id',
        providerData: providerData
      };

      // Save the user OAuth profile
      User.saveOAuthUserProfile(req, providerUserProfile, done);
    }));
};