const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  profileIconColor: {
    type: String,
    required: true,
    default: "#3F51B5"
  },
  bio: {
    type: String,
    maxlength: 500,
    trim: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'non-binary', 'other', 'NA'],
    required: false // Set to false to allow null
  },
  interests: {
    type: [String],
    default: []
  },
  socialMedia: {
    twitter: {
      type: String,
      trim: true
    },
    facebook: {
      type: String,
      trim: true
    },
    instagram: {
      type: String,
      trim: true
    },
  },
  favoritePokemon: {
    name: {
      type: String
    },
    image: {
      type: String
    }
  },
});

const profile = mongoose.model('profiles', profileSchema);

module.exports = profile;