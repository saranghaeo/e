const express = require('express');
const passport = require('./passport');
const session = require

const app = express();
const port = 3000;

// Required to get data from user for sessions
app.use(session({
    secret: 'Whatever_You_Want',
    saveUninitialized: true,
    resave: false,
    cookie: {
        maxAge: 3600000
    }
}));

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get('/', (req, res) => {
    res.send(req.user);
});

app.get('/api/user', (req, res) => {
    res.send(req.user);
});

app.get('/api/auth/steam', passport.authenticate('steam'), (req, res) => {
    // This will not be called because we're redirecting to Steam login page
});

app.get('/api/auth/steam/return', passport.authenticate('steam', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/');
});

app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// Initiate app
app.listen(port, () => {
    console.log('Listening, port ' + port);
});