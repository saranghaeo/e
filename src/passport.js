const passport = require('passport');
const SteamStrategy = require('passport-steam').Strategy;

passport.use(new SteamStrategy({
  returnURL: 'http://localhost:5173/auth/steam/return',
  realm: 'http://localhost:5173/',
  apiKey: 'YOUR_API_KEY'
}, (identifier, profile, done) => {
  // callback function
}));