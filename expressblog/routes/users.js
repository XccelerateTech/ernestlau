const express = require('express')
const { check, validationResult } = require('express-validator/check');
const bcrypt = require('bcrypt');
const passport = require('passport')

let router = express.Router();
let User = require('../models/user')


router.get('/register', (req, res) => {
    res.render('users/register')
})

router.post('/register', [check('name').isLength({ min: 1 }).withMessage('name is required'),
check('email').isEmail(),
check('username').isLength({ min: 1 }),
check("password", "invalid password")
    .isLength({ min: 1 })
    .custom((value, { req, loc, path }) => {
        if (value !== req.body.password_confirmation) {
            // trow error if passwords do not match
            throw new Error("Passwords don't match");
        } else {
            return value;
        }
    })], (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.log(errors.array())
            res.render('users/register', { errors: errors.array() })
        } else {

            let user = new User(req.body);

            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(user.password, salt, function (err, hash) {
                    // Store hash in your password DB.
                    if (err) {
                        console.log(err);
                        return;
                    }

                    user.password = hash;
                    user.save((err) => {
                        if (err) {
                            console.log(err);
                            return;
                        } else {
                            req.flash("success", "You are now registered and can log in");
                            res.redirect('/users/login')
                        }
                    })

                });
            });
        }

        return;
    })

router.get('/login', (req, res) => {
    res.render('users/login')
});

router.post('/login', 
  passport.authenticate('local', { failureRedirect: 'login', failureFlash: true, successFlash: true }),
  function(req, res, next) {
    res.redirect('/');
  });

router.get('/logout', function(req, res){
  req.logout();
  req.flash('success', 'You have logouted')
  res.redirect('/users/login');
});

module.exports = router;