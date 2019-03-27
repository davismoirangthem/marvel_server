const express = require('express');
var mcuRouter = express.Router();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var McuController = require('../controllers/McuController');

mcuRouter.get('/all', function(req, res){
  McuController.getAllCharacters().then(function(result){
    res.send(result);
  }).catch(function(err){
    console.log(err);
    res.end();
  });
});



mcuRouter.post('/character', jsonParser, function(req, res){
  res.send(`${req.body.name} --> ${req.body.alias}`);
});

module.exports = mcuRouter;
