import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:merchant_app/src/screens/home.dart';
import 'package:merchant_app/src/screens/sign_up.dart';

class SignInPage extends StatelessWidget {
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
                Text(
                  'NodeJS MSA',
                  style: TextStyle(fontSize: 40, fontWeight: FontWeight.w500),
                ),
                TextFormField(
                  autofocus: true,
                  textInputAction: TextInputAction.next,
                  decoration: InputDecoration(
                      contentPadding: EdgeInsets.all(20.0),
                      filled: true,
                      labelStyle: TextStyle(fontSize: 20.0),
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
                      contentPadding: EdgeInsets.all(20.0),
                      filled: true,
                      labelText: 'Password',
                      border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(30.0),
                          borderSide: BorderSide.none)),
                  obscureText: true,
                  onChanged: (value) {
                    print(value);
                  },
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    TextButton(
                      child: Text('Forgot password?'),
                      onPressed: () => print('forgot password called'),
                    ),
                  ],
                ),
                SizedBox(
                  width: double.infinity,
                  child: ElevatedButton(
                    child: Text("Sign in"),
                    onPressed: () => Navigator.of(context).push(
                        MaterialPageRoute(builder: (context) => HomePage())),
                  ),
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text('Don\'t have an account?'),
                    TextButton(
                        child: Text('Sign up'),
                        onPressed: () => Navigator.of(context).push(
                            MaterialPageRoute(
                                builder: (context) => SignUpPage()))),
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
