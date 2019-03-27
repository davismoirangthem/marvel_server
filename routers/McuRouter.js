const express = require('express');
const mcuRouter = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const McuController = require('../controllers/McuController');
const responseHelper = require('../helpers/responseHelper');

mcuRouter.get('/all', function(req, res){
  McuController.getAllCharacters().then(function(result){
    let response = responseHelper.createResponse(result, true, null);
    res.send(response);
  }).catch(function(err){
    let response = responseHelper.createResponse(err, false, err);
    res.status(500);
    res.json(response);
  });
});

mcuRouter.post('/character/add', jsonParser, function(req, res){
  McuController.getNewId('characters').then(function(result){
    if(result){
      let id = result.last_id + 1;
      let newCharacter = req.body;
      newCharacter.id = id;
      McuController.addCharacter(newCharacter).then(function(result){
        if(result){
          McuController.updateId('characters', id);
          let response = responseHelper.createResponse("Character Successfully Added", true, null);
          res.status(201);
          res.json(response);
        }
        else{
          let response = responseHelper.createResponse("An Error Occurred", false, result);
          res.json(response);
        }
      }).catch(function(err){
        let response = responseHelper.createResponse("Server Error", false, err);
        res.status(500);
        res.json(response);
      });
    }
  });
});

mcuRouter.get('/character/:id', function(req, res){
  let id = req.params.id;
  McuController.getCharacterById(id).then(function(result){
    let response = responseHelper.createResponse(result, true, null);
    res.json(response);
  }).catch(function(err){
    let response = responseHelper.createResponse("Server Error", false, err);
    res.status(500);
    res.json(response);
  })
});

module.exports = mcuRouter;
