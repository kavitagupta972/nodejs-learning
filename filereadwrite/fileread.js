var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('ui.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

fs.readFile('input.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("file data : " + data.toString());
 });