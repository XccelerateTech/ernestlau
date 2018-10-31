var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var alphabetArr = alphabet.split("");

var randomAlphabet = function(n){
    return alphabetArr[n-1];
}

module.exports = randomAlphabet;