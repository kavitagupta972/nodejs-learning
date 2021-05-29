var express = require('express');
var app = express();
var fs = require("fs");
var user = {
    "user90" : {
       "name" : "mohit",
       "password" : "password4",
       "profession" : "teacher",
       "id": 90
    }
 }

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})
app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
    });
 })

app.post('/addUser', function (req, res) {
    // First read existing users.
   var result =  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["user90"] = user["user90"];
       console.log( data );
       writeToFile(data);
       res.end( JSON.stringify(data));
    });
 })

 app.delete('/deleteUser', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + 90];
        
       console.log( data );
       writeToFile(data);
       res.end( JSON.stringify(data));
    });
 })

 function writeToFile(data) {
    fs.writeFile(__dirname + "/" + "users.json", JSON.stringify(data), function (err) {
        if (err) throw err;
        console.log('Replaced!');
      });
 }

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

