const modelHelper = require('../helpers/modelHelper');
const McuSchema = require('../schemas/McuSchema');
var character = modelHelper.createModel('character', McuSchema);

var getAllCharacters = async function(){
  var response = await character.find({});
  return response;
};

const McuController = {
  getAllCharacters
};

module.exports = McuController;
