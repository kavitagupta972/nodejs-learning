

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
const Logger = require('./logger');
 const logger = new Logger();
logger.on("messageLogged", function(arg) {
    console.log('listener is called ',arg.url);
})

logger.log("logged error message");