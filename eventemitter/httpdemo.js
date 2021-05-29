
const http = require('http');
const server = http.createServer(function(req, res) {
    if(req.url == '/') {
        res.write('connecting to http server');
        res.end();
    } else{
        res.write("incorrect url");
        res.end();
    }
});

server.listen(4040);

console.log("listening to server on 4040 port");
