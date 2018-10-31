function processArray(arr, callback) {
    return arr.map(callback)
}


// testing
var myArray = [4, 8, 2, 7, 5];

console.log(processArray(myArray, function(a) {
    return a * 2;
}));

var myArray = [7, 8, 9, 1, 2];
console.log(processArray(myArray, function (a) {
    return a + 5;
}));