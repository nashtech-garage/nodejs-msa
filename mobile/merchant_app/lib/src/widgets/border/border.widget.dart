import 'package:flutter/material.dart';

class BorderDash extends StatelessWidget {
  final double marginTop;
  final double marginBottom;
  final double width;
  final Color color;

  const BorderDash({
    super.key,
    this.marginBottom = 4,
    this.marginTop = 4,
    this.width = 0.5,
    this.color = Colors.black,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsetsDirectional.only(
        bottom: marginBottom,
        top: marginTop,
      ),
      decoration: BoxDecoration(
        border: Border.fromBorderSide(
          BorderSide(
            color: color,
            width: width,
            strokeAlign: BorderSide.strokeAlignInside,
          ),
        ),
      ),
    );
  }
}
