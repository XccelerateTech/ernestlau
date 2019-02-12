const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')


mongoose.connect("mongodb://localhost/nodejs-blog");
let db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to Mongodb');
})

db.on('error', (err) => {
    console.log(err);
})

const app = express();

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

require('./config/passport')(passport)
app.use(passport.initialize());
app.use(passport.session());
app.use(require('connect-flash')());
app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
});
app.use(bodyParser.urlencoded({ extendex: false }))
app.use(express.static(path.join(__dirname, 'public')))

let Article = require('./models/article')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

let articles = require('./routes/articles')
let users = require('./routes/users')

app.get('*', (req,res,next)=>{
    res.locals.user = req.user || null
    next();
})

app.get('/', (req, res) => {
    Article.find({}, (err, articles) => {
        res.render('articles/index', {
            title: 'Articles', articles: articles
        })
    })
})

app.use('/articles', articles)
app.use('/users', users)

app.listen(5000, (req, res) => {
    console.log('Sever started on port 5000')
})