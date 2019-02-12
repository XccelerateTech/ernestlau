const express = require('express')
const { check, validationResult } = require('express-validator/check');

let router = express.Router();

let Article = require('../models/article')
let User = require('../models/user')

router.get('/new', authCheck,(req, res) => {
    res.render('articles/new', {
        title: 'Add articles'
    })
})

router.get('/:id', (req, res) => {
    Article.findById(req.params.id, (err, article) => {
        User.findById(article.author, (err, user) => {
            res.render('articles/show', {
                article: article,
                author: user.name
            })
        })
    })
})

router.get('/:id/edit', authCheck, (req, res) => {
    Article.findById(req.params.id, (err, article) => {
        if(article.author != req.user._id){
            req.flash('danger', 'You are not the author')
            return res.redirect('/')
        }
        User.findById(article.author, (err, user) => {
            res.render('articles/edit', {
                title: 'Edit title',
                article: article
            })
        })
    })
})

router.post('/create', [check('title').isLength({ min: 1 }).withMessage('Do not empty'), check('body').isLength({ min: 1 })], (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log(errors.array());
        res.render('articles/new', { title: 'Add articles', errors: errors.array() })
    } else {

        let article = new Article(req.body);
        article.author = req.user._id

        article.save((err) => {
            if (err) {
                console.log(err);
                return;
            } else {
                req.flash("success", "Article added");
                res.redirect('/')
            }
        })
    }

    return;
})

router.post('/update/:id', (req, res) => {
    let query = { _id: req.params.id }

    Article.update(query, req.body, (err) => {
        if (err) {
            console.log(err);
            return;
        } else {
            res.redirect('/')
        }
    })
})

router.delete('/:id', (req, res) => {
    let query = { _id: req.params.id }

    Article.findById(req.params.id, (err, article)=>{
        if (article.author != req.user._id){
            req.flash('danger', 'You are not the author')
            return res.redirect('/')
        }else{
            Article.deleteOne(query, (err) => {
                if (err) {
                    console.loe(err)
                }
                res.send('success')
            })
        }
    })
})

function authCheck(req,res,next){
    if (req.isAuthenticated()) {
        return next();
    } else {
        req.flash('danger', 'Please login');
        res.redirect('/users/login');
    }
}

module.exports = router;