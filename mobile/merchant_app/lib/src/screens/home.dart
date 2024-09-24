import 'package:flutter/material.dart';
import 'package:merchant_app/src/wigets/search_title_bar.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: SearchTitleBar()),
      body: Center(
        child: Text("hello world"),
      ),
    );
  }
}
