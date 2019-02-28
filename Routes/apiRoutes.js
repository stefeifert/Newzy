const db = require('../Models');

module.exports = function (app) {
    // Getting all the articles within the db
    app.get('/api/articles', function (req, res) {
        db.Article.findAll().then(function (dbArticle) {
            res.json(dbArticle);
        }).catch(function (error) {
            res.json({ error: error });
        });
    });

    // Finding a specifc article within the db
    app.get('/api/articles/:id', function (req, res) {
        db.Article.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Author]
        }).then(function (dbArticle) {
            res.json(dbArticle);
        }).catch(function (error) {
            res.json({ error: error });
        });
    });

    // Post route for saving an article
    app.post('/api/articles', function (req, res) {
        db.Article.create(req.body).then(function (dbArticle) {
            res.json(dbArticle);
        }).catch(function (error) {
            res.json({ error: error });
        });
    });

    // User Routes

    // Post User Session data
    app.post('/api/session', function (req, res) {
        db.User.find(req.body)
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // User login API view, by ID
    app.get('/api/user/:id', function (req, res) {
        db.User.find({ _id: req.params.id })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // User login API view, all users
    app.get('/api/user', function (req, res) {
        db.User.findAll()
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // User post to create a new login
    app.post('/api/user', function (req, res) {
        db.User.create(req.body)
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // app.put('/api/articles/:id', function (req, res) {
    //     db.Article.update(
    //         req.body,
    //         {
    //             where: {
    //                 id: req.params.id
    //             }
    //         }).then(function (dbArticle) {
    //             res.json(dbArticle);
    //         }).catch(function (error) {
    //             res.json({ error: error });
    //         });
    // });
};
