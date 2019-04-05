const modelHelper = require('../helpers/modelHelper');
const McuSchema = require('../schemas/McuSchema');
const Character = modelHelper.createModel('character', McuSchema.character);
const id = modelHelper.createModel('id', McuSchema.id);
const Keyword = modelHelper.createModel('keyword', McuSchema.keyword);

var getNewId = async function(collectionName){
  let response = await id.findOne({ collectionName: collectionName });
  return response;
};

var updateId = async function(collectionName, newId){
  let response = await id.updateOne({ collectionName: collectionName }, { lastId: newId });
  return response;
};

var addCharacter = async function(characterData){
  let newCharacter = new Character(characterData);
  let response = await newCharacter.save(newCharacter);
  return response;
};

var addMultipleCharacters = async function(characterArray, lastId){
  let result = { id: lastId, success: false }
  try{
    characterArray.forEach(function(character, key){
      lastId += 1;
      let newCharacter = new Character(character);
      newCharacter.id = lastId;
      newCharacter.save(newCharacter);
      result.id = lastId;
      result.success = true;
    });
  }
  catch{
    result.success = false;
  }
  return result;
}

var getAllCharacters = async function(){
  let response = await Character.find({}, { name: 1, imageUrl: 1, id: 1, _id: 0 });
  return response;
};

var getCharacterById = async function(id){
  let response = await Character.findOne({ id: id }, { _id: 0, __v: 0 });
  return response;
};

var searchCharacter = async function(searchString){
  let response = await Character.find({name: { $regex: `${searchString}`, $options: 'i' } },{ name: 1, id: 1 });
  return response;
};

var addKeyword = async function(keywordArray){
  let response = false;
  try{
    keywordArray.forEach(function(keyword){
      let newKeyword = new Keyword(keyword);
      newKeyword.save(newKeyword);
      response = true;
    });
  }
  catch{
    response = false;
  }
  return response;
};

const McuController = {
  getNewId,
  updateId,
  addCharacter,
  addMultipleCharacters,
  getAllCharacters,
  getCharacterById,
  searchCharacter,
  addKeyword
};

module.exports = McuController;
