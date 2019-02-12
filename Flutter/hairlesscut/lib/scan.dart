import 'dart:async';

import 'package:barcode_scan/barcode_scan.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:dio/dio.dart';

class ScanScreen extends StatefulWidget {
  @override
  _ScanState createState() => new _ScanState();
}

class _ScanState extends State<ScanScreen> {
  String barcode = "";
  bool _isButtonDisabled = false;

  @override
  initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: new AppBar(
          title: new Text('Confirm User Booking'),
          backgroundColor: Colors.red[900],
        ),
        body: new Container(
            decoration: new BoxDecoration(
              image: new DecorationImage(
                colorFilter: new ColorFilter.mode(
                    Colors.black.withOpacity(0.2), BlendMode.dstATop),
                image: new AssetImage("images/bg.jpg"),
                fit: BoxFit.cover,
              ),
            ),
            child: new ListView(
              padding: new EdgeInsets.only(top: 140),
              children: [
                new Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: <Widget>[
                    Image.asset("images/logohcpng.png",
                        width: 200, height: 300, fit: BoxFit.scaleDown),
                    Padding(
                        padding: EdgeInsets.symmetric(
                            horizontal: 16.0, vertical: 8.0),
                        child: RaisedButton(
                            color: Colors.red[700],
                            textColor: Colors.white,
                            splashColor: Colors.red[400],
                            disabledColor: Colors.red[300],
                            onPressed: _isButtonDisabled ? null : scan,
                            child: !_isButtonDisabled
                                ? const Text('Scan User QR code')
                                : SizedBox(
                                    child: CircularProgressIndicator(
                                      valueColor:
                                          new AlwaysStoppedAnimation<Color>(
                                              Colors.red[200]),
                                      strokeWidth: 3,
                                    ),
                                    height: 25,
                                    width: 25))
                        // child: const Text('Scan User QR code')),
                        ),
                    Padding(
                        padding: EdgeInsets.symmetric(
                            horizontal: 16.0, vertical: 8.0),
                        child: Chip(
                          avatar: Icon(Icons.notifications),
                          label: Text(
                            barcode == "" ? "Merchant Only" : barcode,
                            softWrap: true,
                          ),
                          backgroundColor: barcode != "Order Completed!"
                              ? Colors.red[200]
                              : Colors.teal[100],
                          padding: EdgeInsets.only(left: 20, right: 20),
                        )
                        // child: Text(
                        //   barcode == "" ? "Merchant Only" : barcode,
                        //   textAlign: TextAlign.center,
                        // ),
                        ),
                  ],
                )
              ],
            )));
  }

  Future scan() async {
    try {
      String scanResult = await BarcodeScanner.scan();
      setState(() => this._isButtonDisabled = true);
      Dio dio = new Dio();
      dio.options.connectTimeout = 5000;
      Response response =
          await dio.get("http://172.20.10.2:6060/api/booking/${scanResult}");
      if (response.data != null && response.statusCode == 200) {
        setState(() {
          this.barcode = response.data.toString();
          this._isButtonDisabled = false;
        });
      }
    } on DioError catch (e) {
      setState(() => this.barcode = 'Network Error');
      this._isButtonDisabled = false;
    } on PlatformException catch (e) {
      if (e.code == BarcodeScanner.CameraAccessDenied) {
        setState(() {
          this.barcode = 'The user did not grant the camera permission!';
          this._isButtonDisabled = false;
        });
      } else {
        setState(() => this.barcode = 'Unknown error: $e');
        this._isButtonDisabled = false;
      }
    } on FormatException {
      setState(() => this.barcode =
          'null (User returned using the "back"-button before scanning anything. Result)');
      this._isButtonDisabled = false;
    } catch (e) {
      setState(() => this.barcode = 'Unknown error: $e');
      this._isButtonDisabled = false;
    }
  }
}
