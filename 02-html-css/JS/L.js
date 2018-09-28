function countChar(string,character) {
    if (typeof string == 'string'
        && typeof character == 'string' // check if it is string
        && character.length == 1 // check if more than 1 character
        && character.charCodeAt(0) >= 65 // check if it is Alphabet
        && character.charCodeAt(0) <= 122) { // check if it is Alphabet
        var times = 0;
        var characterNocase = character.toLowerCase(); //change to case insensitive
        var stringNocase = string.toLowerCase(); //change to case insensitive
        var da = stringNocase.split(""); //array
    for (var i = 0; i < da.length; i++) {
        if (da[i] === characterNocase) {
            times++;
        }
    }
    return times;
    } else {
        return "Error! Please enter 1 Alphabet only.";
    }
}
console.log(countChar("HelloOIROF234abcOMV34bbbbbbbbbbaBB","3"));//Error
console.log(countChar("fizzbuzz","z")); //4
console.log(countChar("Fancy fifth fly aloof","f") );//5