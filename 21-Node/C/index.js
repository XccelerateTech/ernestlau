var number = require('./random')
var alphabet = require('./numtoalp');

var randomAlphabet = function(times){
    var arrApend = [];
    for (i = 0; i < times; i++) { 
        arrApend.push(alphabet(number()));
    }
    return arrApend.join("");
}
console.log(randomAlphabet(44));
