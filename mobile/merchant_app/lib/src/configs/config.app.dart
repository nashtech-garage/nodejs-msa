import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart' show rootBundle;

class AppConfig with ChangeNotifier {
  double borderRadius = 10;
  late String appName;
  Color mainColor = Colors.white;
  bool isLoaded = false;

  // Load config from the JSON file
  Future<void> loadConfig() async {
    try {
      final String jsonString = await rootBundle.loadString('app.config.json');
      final Map<String, dynamic> jsonMap = jsonDecode(jsonString);

      // Parse the values
      borderRadius = jsonMap['borderRadius'].toDouble();
      appName = jsonMap['appName'].toString();
      mainColor = _hexToColor(jsonMap['mainColor'].toString());

      isLoaded = true; // Mark as loaded
      notifyListeners(); // Notify listeners that data is available
    } catch (e) {
      print("Error loading config: $e");
    }
  }

  // Convert hex color string to Color
  Color _hexToColor(String hexString) {
    final buffer = StringBuffer();
    if (hexString.length == 6 || hexString.length == 7) buffer.write('ff');
    buffer.write(hexString.replaceFirst('#', ''));
    return Color(int.parse(buffer.toString(), radix: 16));
  }
}
