const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Create a new Task Schema to map Mongo documents to an object in our node application
 */
var NoteSchema = new Schema({
  article_name: String,
  author_name: String,
  publication_source: String,
  article_url: String

});

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
