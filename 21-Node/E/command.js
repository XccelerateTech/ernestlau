var start =  function(timer,second){
    timer.emit('start', second);
};

var pause = function(){
    timer.emit('pause');
}

var stop = function(){
    timer.emit('stop');
}

module.exports.start = start;
module.exports.pause = pause;
module.exports.stop = stop;
