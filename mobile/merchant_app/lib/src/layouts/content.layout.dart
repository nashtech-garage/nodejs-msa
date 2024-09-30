import 'package:flutter/material.dart';

class ContentLayout extends StatelessWidget {
  final Widget children;
  final String titleBar;

  const ContentLayout(
      {super.key, required this.children, required this.titleBar});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          titleBar,
          style: const TextStyle(color: Colors.black),
        ),
      ),
      body: Container(
        padding: const EdgeInsets.all(4),
        child: children,
      ),
    );
  }
}
