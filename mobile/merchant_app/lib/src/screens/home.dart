import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Home screen 2'),
      ),
      body: Center(
        child: InkWell(
          onTap: () {
            // Navigate to the login page
            Navigator.pushNamed(context, '/signin');
          },
          child: const Text(
            'Go to login',
            style: TextStyle(
              color: Colors.blue,
              decoration: TextDecoration.underline,
              fontSize: 18,
            ),
          ),
        ),
      ),
    );
  }
}
