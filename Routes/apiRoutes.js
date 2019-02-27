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
