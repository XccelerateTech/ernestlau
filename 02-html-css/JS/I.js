for (var i = 1; i <= 30; i++) {
    if (i%3 == 0 && i%5 == 0)  {
        console.log('Hong Kong');
    } else if (i%5 == 0) {
        console.log('Kong');
    } else if (i%3 == 0) {
        console.log('Hong');
    } else
    console.log(i);
}