
const http = require('http');
const server = http.createServer();
server.on('connect', function(socket) {
    console.log('server is listening to port ', socket);
})

server.listen(4040);

console.log("listening to server on 4040 port");
