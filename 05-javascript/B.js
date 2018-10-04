function reverse(num) {
    num = num.toString()
    renum = [];
    for (var i = 1; i <= num.length ; i++) {
        renum.push(num[num.length-i]);
    }
    return renum;
}

console.log(reverse(456789));