const mongoose = require("mongoose");
const Schema = mongoose.Schema;


/**
 * Create a new Task Schema to map Mongo documents to an object in our node application
 */
let ArticleSchema = new Schema({
  article_name: String,
  author_name: String,
  publication_source: String,
  article_url: String,
  photo_url: String

});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
