const Timer = require('./timer');
const start = require('./command').start;

var timer = new Timer();

timer.on('tick', function(remaining){
    if (remaining == 0){
        return console.log('boom');
    } 
    console.log(remaining);
})

start(timer,5);
