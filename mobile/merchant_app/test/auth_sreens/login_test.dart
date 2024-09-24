import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:merchant_app/src/configs/config.app.dart';
import 'package:merchant_app/src/screens/auth/signin.dart';
import 'package:provider/provider.dart';

void main() {
  late AppConfig appConfig;

  setUpAll(() async {
    appConfig = AppConfig();
    await appConfig.loadConfig();
  });

  testWidgets('SignInScreen display correctly', (WidgetTester tester) async {
    await tester.pumpWidget(
      ChangeNotifierProvider<AppConfig>.value(
        value: appConfig,
        child: const MaterialApp(
          home: SignInScreen(),
        ),
      ),
    );

    await tester.pump();

    expect(find.text('Nodejs MSA'), findsOneWidget);
  });
}
