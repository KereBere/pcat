const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

//Create Scheme
const PhotoScheme = new Scheme({
  title: String,
  description: String,
  image: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Photo = mongoose.model('Photo', PhotoScheme);

module.exports = Photo;
