const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a category name'],
    unique: true,
    trim: true,
    maxlength: [30, 'Category name too long'],
  },
});

module.exports = mongoose.model('Category', CategorySchema);
