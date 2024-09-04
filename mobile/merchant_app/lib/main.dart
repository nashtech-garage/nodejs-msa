import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:merchant_app/src/screens/auth/forget_password.dart';
import 'package:merchant_app/src/screens/home.dart';
import 'package:merchant_app/src/screens/auth/signin.dart';
import 'package:merchant_app/src/screens/auth/signup.dart';

Future main() async {
  await dotenv.load(fileName: '.env');
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.blueAccent),
        useMaterial3: true,
      ),
      routes: {
        '/': (context) => const HomeScreen(),
        '/signin': (context) => const SignInScreen(),
        '/signup': (context) => SignUpScreen(),
        '/forget-password': (context) => const ForgetPasswordScreen(),
      },
    );
  }
}
