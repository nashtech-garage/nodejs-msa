import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:merchant_app/src/constants.app.dart';

/// Loading the env variables for application.
Future<void> loadEnv() async {
  if (isProduction) {
    await dotenv.load(fileName: '.env');
  } else if (isDevelopment) {
    await dotenv.load(fileName: '.env.development');
  }
}
