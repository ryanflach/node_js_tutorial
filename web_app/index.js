const fs = require('fs');
const options = JSON.parse(fs.readFileSync('package.json'));
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const app = express();
const server = http.createServer(app);
const db = require('./database');

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, (username, password, done) => {
  if (db.authenticate(username, password)) {
    done(null, {
      username: username
    });
  } else {
    done(null, false);
  }
}));

const sessions = new Map();

passport.serializeUser((user, cb) => {
  sessions.set(user.username, user);
  cb(null, user.username);
});

passport.deserializeUser((username, cb) => {
  cb(null, sessions.get(username));
});

app.use(cookieParser);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'secret'
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'www', 'login.html'));
});

app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login'}));

app.use((req, res, next) => {
  if (!req.user) {
    res.redirect('/login');
    return;
  }

  next();
});

app.use(express.static(options.webServer.folder));

server.listen(options.webServer.port, () => {
  console.log(`web server started on port ${options.webServer.port}.`);
});
