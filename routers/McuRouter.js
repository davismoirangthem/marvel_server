const express = require('express');
var mcuRouter = express.Router();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const modelHelper = require('../helpers/modelHelper');
const McuSchema = require('../schemas/McuSchema');
var character = modelHelper.createModel('character', McuSchema);

mcuRouter.get('/all', function(req, res){
  character.find().then(function(response){
    res.send(response);
  }).catch(function(err){
    console.log(err);
    res.status(500);
    res.end();
  });
});

mcuRouter.post('/character', jsonParser, function(req, res){
  res.send(`${req.body.name} --> ${req.body.alias}`);
});

module.exports = mcuRouter;
