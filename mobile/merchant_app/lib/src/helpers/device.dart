import 'package:flutter/material.dart';

/// Helper function to get the current device size.
Size getDeviceQuery(BuildContext context) {
  return MediaQuery.of(context).size;
}

/// A helper function to get the dimensions based on a dynamic aspect ratio.
/// The `aspectWidth` and `aspectHeight` are the aspect ratio dimensions.
/// Default ratio is 4:3.
/// For example, use 16 for `aspectWidth` and 9 for `aspectHeight` to get a 16:9 aspect ratio.
Size getAspectRatioSize(double width,
    {double aspecWidth = 4, double aspecHeight = 3}) {
  double height = (width / aspecWidth) * aspecHeight;
  return Size(width, height);
}
