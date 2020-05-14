// /Created a book schema using mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = newSchema ({
  title: { type: String, required: true },
  subtitle: { type: String},
  authors: { type: [String], required: true },
  description: {type: String},
  image: { type: String},
  link: { type: String},
});

//converting into a model
const Book = mongoose.model('Book', bookSchema);

module.export = Book;
