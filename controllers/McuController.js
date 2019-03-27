const modelHelper = require('../helpers/modelHelper');
const McuSchema = require('../schemas/McuSchema');
const character = modelHelper.createModel('character', McuSchema.character);
const id = modelHelper.createModel('id', McuSchema.id);

var getNewId = async function(collectionName){
  let response = await id.findOne({ collection_name: collectionName });
  return response;
};

var updateId = async function(collectionName, newId){
  let response = await id.updateOne({ collection_name: collectionName }, { last_id: newId });
  return response;
};

var addCharacter = async function(characterData){
  let newCharacter = new character(characterData);
  let response = await newCharacter.save(characterData);
  return response;
};

var getAllCharacters = async function(){
  let response = await character.find({});
  return response;
};

var getCharacterById = async function(id){
  let response = await character.findOne({ id: id }, { _id: 0, __v: 0 });
  return response;
};

const McuController = {
  getNewId,
  updateId,
  addCharacter,
  getAllCharacters,
  getCharacterById
};

module.exports = McuController;
