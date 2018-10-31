const Timer = require('./timer');

const timer = new Timer();

timer.on('tick', function(s) {
    setTimeout(function(){
        if (s > 0) {
            console.log(`You still have ${s} secound remained.`)
            s--
            return timer.countdown(s);
        } else if (s == 0) {
            console.log('Boom!');
        }
    }, 1000);
});

timer.countdown(4);