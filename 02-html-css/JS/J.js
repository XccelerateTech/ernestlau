var count = "";
function fuck(n){
  if (isNaN(n)) {
      return 'Error';
  } else if (n <= 0) {
      return 'Error';
  } else if (n <= 1000000) {
        n=n*10;
        console.log("The number will multiple 10, so now is " + n + ".");
        return fuck(n);
  } else {
    while (n >= 1000000) {
      return n;
    }
  }
}

console.log(fuck(3334)) 
