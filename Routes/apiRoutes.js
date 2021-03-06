const User = require("../models/User");
const Article = require("../models/Article");
const express = require("express");
const router = express.Router();

// Getting all the articles within the db for the username who is logged in - WIP -
// this will be customized so that specific users can see their specific articles
router.get("/api/article", function(req, res) {
  //   User.find({
  //     where: {
  //       _id: req.body.email
  //     }
  //   })
  Article.find()
    .then(function(dbArticle) {
      res.json(dbArticle);
    })
    .catch(function(error) {
      res.json({ error: error });
    });
});
router.get("/api/article/byname/:article_name", function(req, res) {
  Article.findOne({ article_name: req.params.article_name })
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      res.json(err);
    });
});
// Post route for saving an article
router.post("/api/article", function(req, res) {
  const article = {
    article_id: req.body.article_id,
    article_name: req.body.article_name,
    article_description: req.body.article_description,
    author_name: req.body.author_name,
    publication_source: req.body.publication_source,
    article_url: req.body.article_url,
    photo_url: req.body.photo_url,
    identifier: req.body.identifier
  };

  Article.create(article)
    // .then(function(articleData) {
    //   return User.findOneAndUpdate(
    //     { _id: userId },
    //     { $push: { article: articleData._id } },
    //     { new: true }
    //   );
    // })
    .then(function(userData) {
      res.json(userData);
    })
    .catch(function(error) {
      res.json({ error: error });
    });
});

router.delete("/api/article/:identifier", function(req, res) {
  Article.findOneAndDelete({ identifier: req.params.identifier })
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      res.json(err);
    });
});
router.get("/api/article/byname/:article_name", function(req, res) {
  Article.findOne({ article_name: req.params.article_name })
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      res.json(err);
    });
});

// Finding articles associated with a specific user ID
// const userId = localStorage.getItem("jwtToken");
// router.get(`/api/user/:id`, function(req, res) {
//   User.find({ _id: req.paramas.id })
//     .then(function() {
//       res.json(user.article[0]);
//     })
//     .catch(function(error) {
//       res.json({ error: error });
//     });
// });

// User login API view, all users
router.get("/api/user", function(req, res) {
  User.find()
    .populate("Article")
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      res.json(err);
    });
});

module.exports = router;
