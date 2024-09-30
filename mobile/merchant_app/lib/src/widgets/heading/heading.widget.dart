import 'package:flutter/material.dart';

class Heading extends StatelessWidget {
  static const double heading1 = 21;
  static const double heading2 = 19;
  static const double heading3 = 16;
  static const double heading4 = 13;
  static const double heading5 = 11;
  static const double heading6 = 11;
  static const double paragraph = 11;

  final String content;
  final double fontSize;
  final FontWeight fontWeight;
  final Color color;
  final FontStyle fontStyle;
  final AlignmentGeometry textAlign;
  final TextStyle? style;

  const Heading({
    super.key,
    required this.content,
    this.fontSize = Heading.paragraph,
    this.fontWeight = FontWeight.w400,
    this.color = Colors.black,
    this.fontStyle = FontStyle.normal,
    this.textAlign = Alignment.centerLeft,
    this.style,
  });

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: textAlign,
      child: Text(
        content,
        style: (style ?? const TextStyle())
            .copyWith(
              fontSize: fontSize,
              fontWeight: fontWeight,
              color: color,
              fontStyle: fontStyle,
            )
            .merge(DefaultTextStyle.of(context).style),
      ),
    );
  }
}
