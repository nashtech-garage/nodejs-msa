import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:merchant_app/src/screens/auth/signin.dart';
import 'package:merchant_app/src/utils/load_env.dart';

void main() {
  setUpAll(() async {
    await loadEnv();
  });

  testWidgets('SignInScreen display correctly', (WidgetTester tester) async {
    await tester.pumpWidget(const MaterialApp(home: SignInScreen()));

    expect(find.text('Nodejs MSA Dev'), findsOneWidget);
  });
}
