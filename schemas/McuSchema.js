const mongoose = require('mongoose');

var character = new mongoose.Schema({
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

var McuSchema = {
  character
};

module.exports = McuSchema;
