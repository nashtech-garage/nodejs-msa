import 'package:flutter/material.dart';

class HomeLayout extends StatelessWidget {
  final Widget children;
  final Widget? titleAppBar;

  const HomeLayout({super.key, required this.children, this.titleAppBar});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        title: titleAppBar,
        backgroundColor: Colors.white,
      ),
      body: Padding(
        padding: const EdgeInsets.all(10),
        child: SingleChildScrollView(
          child: children,
        ),
      ),
    );
  }
}
