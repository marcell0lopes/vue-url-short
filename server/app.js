const express = require('express');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');

const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT;

connectDB();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(
  session({
    secret: 'vue is awesome',
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routes
app.use('/auth', require('./routes/users'));
app.use('/api', require('./routes/urls'));
app.use('/', require('./routes/index'));

app.listen(PORT, () => {
  console.log(`Server is running at port :${PORT}`);
});
