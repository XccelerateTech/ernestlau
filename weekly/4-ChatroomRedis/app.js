const express = require('express')
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const SocketHander = require('./socket/index');
const https = require('https');
const fs = require('fs');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const cookieSession = require('cookie-session');


//passport setting
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    keys: ['fuck you all the way']
}))

app.use(passport.initialize())
app.use(passport.session());


passport.serializeUser((user, done) => {
    done(null,user);
});

passport.deserializeUser((user, done) => {
    done(null,user);
});


passport.use(new FacebookStrategy({
    clientID: '2317982038275442',
    clientSecret: 'a6930385cd103d2fdf7349feb743877c',
    callbackURL: "https://smellyasshole.club/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'photos', 'email']
}, (accessToken, refreshToken, profile, done) => {
    done(null, profile)
    })
)

const authCheck = (req,res,next) =>{
    if(!req.user){
        res.redirect('/login');
    } else {
        next()
    }
}

const authCheck2 = (req,res,next) =>{
    if(req.user){
        res.redirect('/');
    } else {
        next()
    }
}
//

// const options = {
//     cert: fs.readFileSync('./localhost.crt'),
//     key: fs.readFileSync('./localhost.key')
//   };

// var index = require('./routes/index');

//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", 'ejs');

// chatroom page render
app.get('/', authCheck, function(req, res, next) {
    console.log(req.user.displayName)
    res.render('index', { title: 'Chatroom test v1.0.0', username: req.user.displayName || 'Guest' });
  });

// app.use('/', index);



//chatroom part
io.on('connection', async (socket) => {

    console.log(`a user conntected`);

    socketHander = new SocketHander();

    socketHander.connect();

    const socketid = socket.id;

    socketHander.getMessages(function(res){
        // console.log(JSON.parse(res))
        io.to(socketid).emit('history', res)
    })


    socket.on("disconnect", () => {
        console.log("a user go out");
    });

    socket.on("message", (obj) => {
        socketHander.storeMessages(obj);  
        io.emit("message", obj);
    });
});
//

//login part
app.get('/login',authCheck2, (req,res)=>{
    res.render('login')
});

app.get('/auth/facebook',passport.authenticate('facebook', {
    authType: 'rerequest',
    scope: ['user_friends', 'manage_pages']
    })
);

app.get('/auth/facebook/callback',passport.authenticate('facebook'),(req,res)=>{
    res.redirect('/')
    // res.send(req.user.displayName)
});

app.get('/auth/logout', (req,res) =>{
    req.logout();
    res.redirect('/');
})
//


server.listen(3001);

// https.createServer(options, app).listen(3001);