const EventEmitter = require('events');

class Timer extends EventEmitter {
    constructor() {
        super();
    }

    countdown(s){
        this.emit('tick', s)
    }
}

module.exports = Timer;