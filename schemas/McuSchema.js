const mongoose = require('mongoose');

var character = new mongoose.Schema({
  id: Number,
  name: String,
  alias: String,
  played_by: String,
  first_appeared_in: String,
  movies: [
    {
      name: String,
      year: Number,
      appearance_type: String
    }
  ]
});

var id = new mongoose.Schema({
  collection_name: String,
  last_id: Number
});

var McuSchema = {
  character,
  id
};

module.exports = McuSchema;
