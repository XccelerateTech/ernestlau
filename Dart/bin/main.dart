import 'dart:async';

main(List<String> args) {
  getAJoke().timeout(new Duration(milliseconds: 3000))
  .then((value) {
    print(value);
  }).catchError((error) {
    if(error is TimeoutException){
      print("It is time out");
    }
    print(error);
  });
}

Future<dynamic> getAJoke() {
  return new Future<dynamic>.delayed(new Duration(milliseconds: 2000), () {
    //Do a long running task. E.g. Network Call.
    //Return the result
    // throw new Exception('This is my first custom exception');
    return "It's a joke";
  });
}
