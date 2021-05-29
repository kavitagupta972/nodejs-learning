
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
// console.log(eventEmitter);

eventEmitter.on("logMessage", function(){
    console.log("event is emitted");
})

eventEmitter.on("logError", function(arg){
    console.log("Error has occured " + arg.error);
})
eventEmitter.emit("logMessage");
eventEmitter.emit("logError", {id : 1, error: "runtime error"});
