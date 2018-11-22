require('dotenv').config()
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

var urlencodedParse = bodyParser.urlencoded({ extended: false });

/* MongoDB setting */
mongoose.connect(process.env.DB_MONGO, { useNewUrlParser: true })
var todoSchema = new mongoose.Schema({
    username: String,
    item: String
})

var userSchema = new mongoose.Schema({
    username: String,
    password: String
})

var Todo = mongoose.model('Todo', todoSchema)
var User = mongoose.model('User', userSchema)
/* MongoDB setting */

/* Passport setting */
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy(
    { usernameField: 'username' },
    function (username, password, done) {
        User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                console.log('Incorrect username.')
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!bcrypt.compareSync(password, user.password)) {
                console.log('Incorrect password.')
                return done(null, false, { message: 'Incorrect password.' });
            }
            console.log('Success login')
            return done(null, user);
        });
    }
));
/* Passport setting */

module.exports = function (app) {
    app.get('/todo', authCheck, (req, res) => {
        Todo.find({ username: req.user.username}, (e, data) => {
            if (e) throw e;
            // console.log(`YOU WANT TO SEE ${req.user}`)
            res.render('todo', { todos: data, username:req.user.username })
        })
    });

    app.post('/reg', urlencodedParse, (req, res) => {
        User.find({ username: req.body.username }, (e, data) => {
            //db.collection.find will return a array which matched
            if (e) {
                console.log(e);
            } else {
                if (data.length > 0) {
                    //user already exist
                    console.log(data)
                    res.send('user already exist')
                } else {
                    //new user
                    let userInput = { username: req.body.username, password: bcrypt.hashSync(req.body.password) }
                    User(userInput).save((e) => { if (e) { console.log(e) } })
                    res.send('success!');
                }
            }
        })
    })

    app.post('/todo', urlencodedParse, (req, res) => {
        if (req.body.item === null || req.body.item === '') {
            res.status(500)
            throw 'No empty toDo allowed'
        } else {
            if (!req.user) {
                console.log('fuck')
                res.status(500)
                throw 'login la 7 head';
            }
            req.body["username"] = req.user.username;
            var itemOne = Todo(req.body).save((e) => {
                if (e) throw e;
                res.end()
                console.log('item saved')
            })
        };
    });

    app.delete('/todo/:item', (req, res) => {
        Todo.deleteOne({ item: req.params.item, username: req.user.username}, function (err, data) {
            if (err) throw err;
            res.end();
        })
    });

    /* Passport */
    app.post('/login', urlencodedParse,
        passport.authenticate('local', {
            successRedirect: '/todo',
            failureRedirect: '/fail'
        })
    );

    app.get('/', (req, res) => {
        res.render('loginpage', {info: ""})
    });

    /* Authcheck, if fail, return to login page*/
    function authCheck(req, res, next){
        if (req.isAuthenticated()) {
            next();
        } else {
            res.render('loginpage', {info: "You need to login"})
        }
    }

    app.get('/fail', (req, res) => {
        res.render('loginpage', {info: "Username / Password incorrect"})
    })

    app.get('/signout', function (req, res) {
        req.logout()
        res.redirect('/')
      })
    /* Passport */
}