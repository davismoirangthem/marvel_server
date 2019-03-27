const mongoose = require('mongoose');

var createModel = function(modelName, schema){
  var model = mongoose.model(modelName, schema);
  return model;
};

const modelHelper = {
  createModel
};

module.exports = modelHelper;
