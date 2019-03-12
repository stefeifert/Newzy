const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/newzy");

const articleSeed = [
  {
    article_name: "Nihit's 1st Article",
    author_name: "Nihit Tiwari",
    publication_source: "CNN",
    article_url: "cnn.com",
    photo_url: "String"
  },
  {
    article_name: "Nihit's 2nd Article",
    author_name: "Nihit Tiwari",
    publication_source: "CBS",
    article_url: "cbsnews.com",
    photo_url: "String"
  },
  {
    article_name: "Nihit's 3rd Article",
    author_name: "Nihit Tiwari",
    publication_source: "FOX",
    article_url: "foxnews.com",
    photo_url: "String"
  }
];

db.Article.deleteMany({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });