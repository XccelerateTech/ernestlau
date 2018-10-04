var studentResult = [100, 43.5, 78.4, 90.2, 11.4];

studentResult.push(49);
studentResult.push(49);
studentResult.push(12.1);
studentResult.push(0);

console.log(studentResult);

var avg = studentResult.reduce(function(accumulator, number){
    return Math.floor(accumulator + number / studentResult.length);
}, 0);


console.log(avg);