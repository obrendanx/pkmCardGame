const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  announcements: {
    type: Boolean,
    default: false
  },
  isGlobalAdmin:{
    type:Boolean,
    required:true,
    default: false
  },
  date:{
    type:Date,
    default:Date.now
  }
});

const User = mongoose.model('users', userSchema);

module.exports = User;