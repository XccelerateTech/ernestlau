var index = [
    "j", //0
    "a", //1
    "b", //2
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i" //9
]

function transform(num) {
    numArray = num.split("");
    numArray.sort();
    var toEng = numArray.map(function(n) {
        return index[n];
    });
return toEng.join("");
}

console.log(transform('21314032425209428'));