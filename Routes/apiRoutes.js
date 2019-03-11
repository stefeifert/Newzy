const User = require('../Models/User');
const Article = require('../Models/Article');
const express = require('express');
const router = express.Router();

// Getting all the articles within the db for the username who is logged in
router.get('/api/articles', function (req, res) {
    Article.find({
        where: {
            username: req.body.username
        }
    }).then(function (dbArticle) {
        res.json(dbArticle);
    }).catch(function (error) {
        res.json({ error: error });
    });
});

// Finding a specifc article within the db by article ID
router.get('/api/articles/:id', function (req, res) {
    Article.findOne({
        where: {
            id: req.params.id
        }
    }).then(function (dbArticle) {
        res.json(dbArticle);
    }).catch(function (error) {
        res.json({ error: error });
    });
});

// Post route for saving an article
router.post('/api/articles', function (req, res) {
    Article.create(req.body).then(function (dbArticle) {
        res.json(dbArticle);
    }).catch(function (error) {
        res.json({ error: error });
    });
});


// User login API view, all users
router.get('/api/users', function (req, res) {
    User.findAll()
        .populate('articles')
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            res.json(err);
        });
});

module.exports = router;
