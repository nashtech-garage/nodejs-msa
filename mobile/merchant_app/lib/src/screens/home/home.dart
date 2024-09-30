import 'package:flutter/material.dart';
import 'package:merchant_app/src/layouts/home.layout.dart';
import 'package:merchant_app/src/mock/home.mock.dart';
import 'package:merchant_app/src/mock/hotels.mock.dart';
import 'package:merchant_app/src/widgets/grids/grid_hotels.widget.dart';
import 'package:merchant_app/src/widgets/heading/heading.widget.dart';
import 'package:merchant_app/src/widgets/section/section.widget.dart';
import 'package:merchant_app/src/widgets/titlebar/search_title_bar.widget.dart';
import 'package:merchant_app/src/widgets/slideshow/slideshow.widget.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return HomeLayout(
      titleAppBar: const SearchTitleBar(),
      children: Column(
        children: [
          Slideshow(
            slides: mockHomeImageSlideShows,
            aspectRatioWidth: 16,
            aspectRatioHeight: 9,
          ),
          Heading(
            content: 'New Hotels',
            fontSize: Heading.heading3,
          ),
          GridHotels(hotels: mockHotelsData),
        ],
      ),
    );
  }
}
