import 'package:http/http.dart' as http;
import 'dart:io';
import 'dart:convert';

// main() async{
//     var url = 'http://httpbin.org/post';
//     var response = await http.post(url,body:"Hello world!");
//     print(response.statusCode);
//     print(response.body);
// }

main() {
  var data="Hello world!";
  List<int> dataToSend = utf8.encode(data);
  int port = 3000;

//Server
  RawDatagramSocket.bind(InternetAddress.loopbackIPv4,port)
  .then((RawDatagramSocket udpsocket){
    udpsocket.listen(
      (RawSocketEvent event){
        if (event == RawSocketEvent.read){
          Datagram dg = udpsocket.receive();
          print(utf8.decode(dg.data));
        }
      }
    );
    //Client
    udpsocket.send(dataToSend,InternetAddress.loopbackIPv4,port);
    print("Send!");
  });

}