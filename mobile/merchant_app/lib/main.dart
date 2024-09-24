import 'package:flutter/material.dart';
import 'package:merchant_app/src/screens/auth/forget_password.dart';
import 'package:merchant_app/src/screens/home.dart';
import 'package:merchant_app/src/screens/auth/signin.dart';
import 'package:merchant_app/src/screens/auth/signup.dart';
import 'package:merchant_app/src/utils/load_env.dart';

Future main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await loadEnv();
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
        '/signup': (context) => const SignUpScreen(),
        '/forget-password': (context) => const ForgetPasswordScreen(),
      },
    );
  }
}
