import 'package:flutter/material.dart';
// import 'package:qr_scanner_generator/home_screen.dart';
import 'package:qr_scanner_generator/scan.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Hairless Cut',
      theme: ThemeData.light(),
      home: ScanScreen(),
    );
  }
}