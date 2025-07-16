const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please provide a username'],
      unique: true,
      trim: true,
      maxlength: [50, 'Username cannot be more than 50 characters'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      match: [/\S+@\S+\.\S+/, 'Email format is invalid'],
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
