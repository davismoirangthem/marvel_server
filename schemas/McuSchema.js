const mongoose = require('mongoose');

var character = new mongoose.Schema({
  id: Number,
  name: String,
  alias: String,
  playedBy: String,
  actorImdbLink: String,
  firstAppearedIn: String,
  imageUrl: String,
  description: String,
  marvelUrl: String,
  movies: [
    {
      name: String,
      year: Number,
      appearanceType: String,
      imdbLink: String
    }
  ]
});

var id = new mongoose.Schema({
  collectionName: String,
  lastId: Number
});

var McuSchema = {
  character,
  id
};

module.exports = McuSchema;
