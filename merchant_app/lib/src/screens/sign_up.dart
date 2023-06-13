import 'package:flutter/material.dart';
import 'package:merchant_app/src/screens/home.dart';
import 'package:merchant_app/src/screens/sign_in.dart';

class SignUpPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Form(
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              ...[
                const Text(
                  'NodeJS MSA',
                  style: TextStyle(fontSize: 40, fontWeight: FontWeight.w500),
                ),
                TextFormField(
                  autofocus: true,
                  textInputAction: TextInputAction.next,
                  decoration: InputDecoration(
                      contentPadding: const EdgeInsets.fromLTRB(20, 10, 20, 10),
                      filled: true,
                      labelStyle: const TextStyle(fontSize: 13.0),
                      labelText: 'First name',
                      border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(30.0),
                          borderSide: BorderSide.none)),
                  onChanged: (value) {
                    print(value);
                  },
                ),
                TextFormField(
                  autofocus: true,
                  textInputAction: TextInputAction.next,
                  decoration: InputDecoration(
                      contentPadding: const EdgeInsets.fromLTRB(20, 10, 20, 10),
                      filled: true,
                      labelStyle: const TextStyle(fontSize: 13.0),
                      labelText: 'Last name',
                      border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(30.0),
                          borderSide: BorderSide.none)),
                  onChanged: (value) {
                    print(value);
                  },
                ),
                TextFormField(
                  autofocus: true,
                  textInputAction: TextInputAction.next,
                  decoration: InputDecoration(
                      contentPadding: const EdgeInsets.fromLTRB(20, 10, 20, 10),
                      filled: true,
                      labelStyle: const TextStyle(fontSize: 13.0),
                      labelText: 'Email',
                      border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(30.0),
                          borderSide: BorderSide.none)),
                  onChanged: (value) {
                    print(value);
                  },
                ),
                TextFormField(
                  decoration: InputDecoration(
                      contentPadding: const EdgeInsets.fromLTRB(20, 10, 20, 10),
                      filled: true,
                      labelStyle: const TextStyle(fontSize: 13.0),
                      labelText: 'Password',
                      border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(30.0),
                          borderSide: BorderSide.none)),
                  obscureText: true,
                  onChanged: (value) {
                    print(value);
                  },
                ),
                TextFormField(
                  decoration: InputDecoration(
                      contentPadding: EdgeInsets.fromLTRB(20, 10, 20, 10),
                      filled: true,
                      labelStyle: const TextStyle(fontSize: 13.0),
                      labelText: 'Confirm password',
                      border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(30.0),
                          borderSide: BorderSide.none)),
                  obscureText: true,
                  onChanged: (value) {
                    print(value);
                  },
                ),
                SizedBox(
                  child: ElevatedButton(
                    child: Text("Sign up"),
                    onPressed: () => Navigator.of(context).push(
                        MaterialPageRoute(builder: (context) => HomePage())),
                  ),
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text('Already have an account?'),
                    TextButton(
                      child: const Text('Sign in'),
                      onPressed: () => Navigator.of(context).push(
                          MaterialPageRoute(
                              builder: (context) => SignInPage())),
                    ),
                  ],
                )
              ].expand(
                (widget) => [
                  widget,
                  const SizedBox(
                    height: 24,
                  )
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}
