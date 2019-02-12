import 'dart:io';

main() async{
  var socket = await Socket.connect('127.0.0.1', 3000);
  print ("Connect");
  socket.write("Hello");
  print("Sent, closing");
  await socket.close();
  print("Closed");
  exit(0);
}