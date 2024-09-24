import 'package:flutter/foundation.dart';

/// Current env is delopment.
bool get isDevelopment => !kReleaseMode || kDebugMode;

/// Current env is production.
bool get isProduction => kReleaseMode;
