
const EventEmitter = require('events');

class Logger extends EventEmitter {

    log(message) {
        console.log(message);
        this.emit("messageLogged", {id : 2, url  :"http://localhost:8080/users"})
    }
}

module.exports = Logger;