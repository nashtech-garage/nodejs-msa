import 'package:flutter/material.dart';
import 'package:merchant_app/src/wigets/search_title_bar.dart';
import 'package:merchant_app/src/wigets/slideshow.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final List<String> imageUrls = [
      'https://picsum.photos/1080/720?random=1',
      'https://picsum.photos/1080/720?random=2',
      'https://picsum.photos/1080/720?random=3',
    ];

    return Scaffold(
      appBar: AppBar(title: const SearchTitleBar()),
      body: Stack(
        alignment: Alignment.center,
        children: [
          Slideshow(
            slides: imageUrls,
            aspectRatioWidth: 16,
            aspectRatioHeight: 9,
          ),
        ],
      ),
    );
  }
}
