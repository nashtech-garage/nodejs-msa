import 'package:flutter/material.dart';
import 'package:merchant_app/src/screens/auth/forget_password.dart';
import 'package:merchant_app/src/screens/home/home.dart';
import 'package:merchant_app/src/screens/auth/signin.dart';
import 'package:merchant_app/src/screens/auth/signup.dart';
import 'package:merchant_app/src/configs/config.app.dart';
import 'package:provider/provider.dart';

Future main() async {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(
    ChangeNotifierProvider(
      create: (context) => AppConfig()..loadConfig(), // Load config on startup
      child: const MyApp(),
    ),
  );
  // runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    final AppConfig appConfig = Provider.of<AppConfig>(context);

    return MaterialApp(
      theme: ThemeData(
        useMaterial3: true,
      ),
      home: !appConfig.isLoaded
          ? const Scaffold(
              body: Center(
                child: CircularProgressIndicator(),
              ),
            )
          : const HomeScreen(),
      routes: {
        '/signin': (context) => const SignInScreen(),
        '/signup': (context) => const SignUpScreen(),
        '/forget-password': (context) => const ForgetPasswordScreen(),
      },
    );
  }
}
