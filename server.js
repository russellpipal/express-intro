var express = require("express");
var path = require("path");

var app = express();

// This part not working yet. More to learn.
// app.get('/public', function(req, res){
//   console.log("GET request received for /public");
//   app.use(express.static(__dirname + '/public'));
//   res.sendStatus(200);
// });

app.get('/', function(req, res){
  console.log("GET request received");
  res.send("We GOT your GET request");
});

app.post('/', function(req, res){
  console.log("POST request received");
  res.status(404).send("Your POST request was received.")
});

app.listen(3000, function(){
  console.log("Listening for requests on port 3000");
});
