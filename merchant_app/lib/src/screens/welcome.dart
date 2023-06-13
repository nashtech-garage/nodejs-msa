import 'package:flutter/material.dart';
import 'package:merchant_app/src/screens/sign_in.dart';
import 'package:merchant_app/src/screens/sign_up.dart';

class WelcomeScreenPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          const Center(
            child: Text(
              'Welcome to Nodejs MSA',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.w500),
            ),
          ),
          const Padding(padding: EdgeInsets.fromLTRB(10, 10, 10, 10)),
          Center(
            child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
              TextButton(
                  onPressed: () => Navigator.of(context).push(
                      MaterialPageRoute(builder: (context) => SignInPage())),
                  child: const Text('Sign in')),
              const SizedBox(height: 10, width: 15),
              ElevatedButton(
                  onPressed: () => Navigator.of(context).push(
                      MaterialPageRoute(builder: (context) => SignUpPage())),
                  child: const Text('Sign up'))
            ]),
          )
        ],
      ),
    );
  }
}
