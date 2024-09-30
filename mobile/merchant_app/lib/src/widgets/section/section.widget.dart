import 'package:flutter/material.dart';
import 'package:merchant_app/src/widgets/heading/heading.widget.dart';

class Section extends StatelessWidget {
  final String title;
  final Widget content;

  const Section({super.key, required this.title, required this.content});

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Padding(
        padding: const EdgeInsets.only(
          top: 10,
        ),
        child: Column(
          children: [
            Align(
              alignment: Alignment.centerLeft,
              child: Heading(
                content: title,
                fontSize: Heading.heading3,
              ),
            ),
            const Padding(
              padding: EdgeInsets.all(4),
            ),
            Container(
              child: content,
            )
          ],
        ),
      ),
    );
  }
}
