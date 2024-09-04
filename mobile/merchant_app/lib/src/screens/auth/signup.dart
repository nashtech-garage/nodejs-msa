import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:form_validator/form_validator.dart';
import 'package:merchant_app/src/screens/home.dart';

class SignUpScreen extends StatefulWidget {
  const SignUpScreen({super.key});

  @override
  _SignUpState createState() => _SignUpState();
}

class _SignUpState extends State<SignUpScreen> {
  final _formKey = GlobalKey<FormState>();

  bool _isSubmiting = false;

  final TextEditingController _firstNameController =
      TextEditingController(text: '');
  final TextEditingController _lastNameController =
      TextEditingController(text: '');
  final TextEditingController _emailController =
      TextEditingController(text: '');
  final TextEditingController _passwordController =
      TextEditingController(text: '');
  final TextEditingController _confirmPasswordController =
      TextEditingController(text: '');

  Future _onSubmitSignup() async {
    if (_formKey.currentState!.validate()) {
      setState(() {
        _isSubmiting = true;
      });
      final body = {
        "firstName": _firstNameController.text,
        "lastName": _lastNameController.text,
        "email": _emailController.text,
        "password": _passwordController.text,
      };

      print(body);

      ScaffoldMessenger.of(context)
          .showSnackBar(const SnackBar(content: Text("Sign up ...")));
      // Simulate a network request or some processing time
      await Future.delayed(const Duration(seconds: 2));

      setState(() {
        _isSubmiting = false;
      });

      // Login success.
      ScaffoldMessenger.of(context)
          .showSnackBar(const SnackBar(content: Text("Sig up successful.")));

      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => const HomeScreen()),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    String appName = dotenv.env['APP_NAME'] ?? "App Name is not defined";
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
                  appName,
                  textAlign: TextAlign.center,
                  style: const TextStyle(
                    fontSize: 32,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 40),
                TextFormField(
                  controller: _firstNameController,
                  validator: ValidationBuilder()
                      .required('First name is required')
                      .build(),
                  decoration: const InputDecoration(
                      labelText: "First name",
                      alignLabelWithHint: true,
                      border: OutlineInputBorder(
                          gapPadding: 20,
                          borderRadius: BorderRadius.all(Radius.circular(10)))),
                ),
                const SizedBox(height: 10),
                TextFormField(
                  controller: _lastNameController,
                  validator: ValidationBuilder()
                      .required('Last name is required')
                      .build(),
                  decoration: const InputDecoration(
                      labelText: "Last name",
                      alignLabelWithHint: true,
                      border: OutlineInputBorder(
                          gapPadding: 20,
                          borderRadius: BorderRadius.all(Radius.circular(10)))),
                ),
                const SizedBox(height: 10),
                TextFormField(
                  controller: _emailController,
                  validator: ValidationBuilder()
                      .email('Enter a valid email')
                      .required("Email is required")
                      .build(),
                  keyboardType: TextInputType.emailAddress,
                  decoration: const InputDecoration(
                      labelText: "Email",
                      alignLabelWithHint: true,
                      border: OutlineInputBorder(
                          gapPadding: 20,
                          borderRadius: BorderRadius.all(Radius.circular(10)))),
                ),
                const SizedBox(height: 10),
                TextFormField(
                  obscureText: true,
                  controller: _passwordController,
                  validator: ValidationBuilder()
                      .required('Password is required')
                      .build(),
                  decoration: const InputDecoration(
                      labelText: "Password",
                      alignLabelWithHint: true,
                      border: OutlineInputBorder(
                          gapPadding: 20,
                          borderRadius: BorderRadius.all(Radius.circular(10)))),
                ),
                const SizedBox(height: 10),
                TextFormField(
                  obscureText: true,
                  controller: _confirmPasswordController,
                  validator: ValidationBuilder()
                      .required('Confirm password is required')
                      .add((value) => value == _passwordController.text
                          ? null
                          : 'Passwords do not match')
                      .build(),
                  decoration: const InputDecoration(
                      labelText: "Confirm password",
                      alignLabelWithHint: true,
                      border: OutlineInputBorder(
                          gapPadding: 20,
                          borderRadius: BorderRadius.all(Radius.circular(10)))),
                ),
                const SizedBox(height: 20),
                ElevatedButton(
                  onPressed: _isSubmiting ? null : _onSubmitSignup,
                  style: ElevatedButton.styleFrom(
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(10)),
                      padding: const EdgeInsets.symmetric(
                          horizontal: 100, vertical: 15)),
                  child: const Text("Sign up"),
                ),
                const SizedBox(height: 40),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const Text("Already have an account?"),
                    TextButton(
                      onPressed: () {
                        Navigator.pushNamed(context, '/signin');
                      },
                      child: const Text('Sign in'),
                    )
                  ],
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
