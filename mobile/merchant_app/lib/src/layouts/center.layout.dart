import 'package:flutter/material.dart';

class CenterLayout extends StatelessWidget {
  final Widget content;

  const CenterLayout({super.key, required this.content});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Center(
          child: content,
        ),
      ),
    );
  }
}
