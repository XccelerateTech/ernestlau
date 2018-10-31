const EventEmitter = require('events');

class Timer extends EventEmitter {
    constructor() {
        super();
        this.second = 0;
        this.counter = 0;
        let interval;

        this.on('start', function(second){

            if (second != NaN) {
                this.second = second;
            }

            interval = setInterval(emitInterval, 1000);

            var that = this

            function emitInterval() {
                var remaining = that.second - that.counter;
                if (remaining == 0){
                    clearInterval(interval);
                } 
                that.emit('tick', remaining)
                that.counter++
            }

            // if (second  > 0) {
            //     interval = setInterval(emitInterval, 1000) ;

            //         emit
            //     };
            // } else if (second - counter == 0) {
            //     clearInterval(interval);
            // }
        });

        this.on('pause', function(){
            clearInterval(interval)
        });

        this.on('stop', function(){
            clearInterval(interval)
            this.second = 0
            this.counter = 0;
        })
    }
}

module.exports = Timer;