const passport = require('passport');
const session = require('express-session');
const passportSteam = require('passport-steam');
const SteamStrategy = passportSteam.Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(new SteamStrategy({
  returnURL: 'http://localhost:5173/api/auth/steam/return',
  realm: 'http://localhost:5173/',
  apiKey: 'YOUR-API-KEY'
}, function(identifier, profile, done) {
  process.nextTick(function() {
    profile.identifier = identifier;
    return done(null, profile);
  });
}));

module.exports = passport;