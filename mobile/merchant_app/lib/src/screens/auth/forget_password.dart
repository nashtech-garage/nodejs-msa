import 'package:flutter/material.dart';
import 'package:form_validator/form_validator.dart';
import 'package:merchant_app/src/configs/config.app.dart';
import 'package:merchant_app/src/screens/home/home.dart';
import 'package:provider/provider.dart';

class ForgetPasswordScreen extends StatefulWidget {
  const ForgetPasswordScreen({super.key});

  @override
  _ForgetPasswordState createState() => _ForgetPasswordState();
}

class _ForgetPasswordState extends State<ForgetPasswordScreen> {
  final _formKey = GlobalKey<FormState>();

  bool _isSubmiting = false;

  final TextEditingController _emailController =
      TextEditingController(text: '');

  Future _onSubmitForm() async {
    if (!_formKey.currentState!.validate()) {
      setState(() {
        _isSubmiting = true;
      });

      final body = {
        'email': _emailController.text,
      };

      print(body);

      ScaffoldMessenger.of(context)
          .showSnackBar(const SnackBar(content: Text("Reseting ...")));
      // Simulate a network request or some processing time
      await Future.delayed(const Duration(seconds: 2));

      setState(() {
        _isSubmiting = false;
      });

      // Login success.
      ScaffoldMessenger.of(context)
          .showSnackBar(const SnackBar(content: Text("Login successful.")));

      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => const HomeScreen()),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    AppConfig appConfig = Provider.of<AppConfig>(context);

    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Form(
          key: _formKey,
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  appConfig.appName,
                  textAlign: TextAlign.center,
                  style: const TextStyle(
                    fontSize: 32,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 40),
                TextFormField(
                  controller: _emailController,
                  keyboardType: TextInputType.emailAddress,
                  validator: ValidationBuilder()
                      .email('Enter a valid email address')
                      .required('Email is required')
                      .build(),
                  decoration: const InputDecoration(
                      labelText: "Email",
                      alignLabelWithHint: true,
                      border: OutlineInputBorder(
                          gapPadding: 20,
                          borderRadius: BorderRadius.all(Radius.circular(10)))),
                ),
                const SizedBox(height: 20),
                ElevatedButton(
                  onPressed: _isSubmiting ? null : _onSubmitForm,
                  style: ElevatedButton.styleFrom(
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(10)),
                      padding: const EdgeInsets.symmetric(
                          horizontal: 100, vertical: 15)),
                  child: _isSubmiting
                      ? const SizedBox(
                          width: 20,
                          height: 20,
                          child: CircularProgressIndicator(
                            color: Colors.white,
                            strokeWidth: 2,
                          ),
                        )
                      : const Text("Reset password"),
                ),
                const SizedBox(height: 20),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const Text("Don't have an account?"),
                    TextButton(
                      onPressed: () {
                        Navigator.pushNamed(context, '/signup');
                      },
                      child: const Text('Sign up now'),
                    )
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
