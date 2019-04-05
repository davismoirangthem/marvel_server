const express = require('express');
const app = express();
const port = 3005;
const cors = require('cors');
const mongoose = require('mongoose');
var mcuRouter = require('./routers/McuRouter');
mongoose.connect('mongodb://127.0.0.1/marvel',{ useNewUrlParser: true });
mongoose.Promise = Promise;
var db = mongoose.connection;

app.use(cors());

db.on('error', function(){
  console.log('Cannot connect to Mongo');
});

db.once('open', function(){
  app.use('/mcu', mcuRouter);
});

app.get('/', function(req, res){
  res.send('Welcome to MARVEL API');
});

app.listen(port, function(){
  console.log(`Marvel Server Running on port ${port}`);
})
