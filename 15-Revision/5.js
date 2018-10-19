function BMI(cm,kg) {
    var result = kg/(cm/100*cm/100)
    return result
}

console.log(BMI(171,90));