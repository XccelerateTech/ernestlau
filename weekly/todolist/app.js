var express = require('express');
var todoController = require('./controllers/todoController');
var cookieParser = require('cookie-parser');
var session = require('express-session')
var passport = require('passport')

var app = express()

// app.use(session({ secret: 'keyboard cat' }));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(session({
    secret: 'secret', 
    cookie: { maxAge: 100 },
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Remember to set this
}));
app.use(passport.initialize());
app.use(passport.session());

todoController(app);

app.listen(8080, function () { console.log('You are listening to 8080') });