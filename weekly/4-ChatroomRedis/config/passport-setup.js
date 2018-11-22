const passport = require('passport');
const FacebookStrategy = require('passport-facebook');

passport.use(new FacebookStrategy({
    clientID: '2317982038275442',
    clientSecret: 'a6930385cd103d2fdf7349feb743877c',
    callbackURL: "https://localhost:3001/auth/facebook/callback"
}), () => {

    }
)