function calculator(operation,value1,value2) {
    if (operation=='+') {
        return value1 + value2;
    } else if (operation=='-') {
        return value1 - value2 ;
    } else if (operation=='*') {
        return value1 * value2;
    } else if (operation=='/') {
        return value1 / value2;
    } else {
        throw new Error('Please check what the fuck you have entered');
    }

}

function area(height,width) {
    return height * width;
}

console.log(calculator('-',5,9));
console.log(area(3,4))