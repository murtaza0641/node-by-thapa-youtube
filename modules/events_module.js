var events = require('events');
// var eventEmitter = new events.EventEmitter();
var event = new events.EventEmitter();

event.on("myName",()=>{
    console.log("this is gm cyber");
})


event.emit("myName");

event.on("check",(st,str)=>{
    console.log(`status code : ${st} and message is ${str}`)
})

event.emit("check",200,"ok")



