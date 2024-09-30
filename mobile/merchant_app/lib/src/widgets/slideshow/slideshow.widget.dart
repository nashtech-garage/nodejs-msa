import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:line_awesome_flutter/line_awesome_flutter.dart';
import 'package:merchant_app/src/configs/config.app.dart';
import 'package:merchant_app/src/helpers/device.dart';
import 'package:merchant_app/src/screens/auth/signin.dart';
import 'package:provider/provider.dart';
import 'package:smooth_page_indicator/smooth_page_indicator.dart';

class Slideshow extends StatefulWidget {
  final List<String> slides;
  final double aspectRatioWidth;
  final double aspectRatioHeight;

  const Slideshow({
    super.key,
    required this.slides,
    required this.aspectRatioWidth,
    required this.aspectRatioHeight,
  });

  @override
  _SlideshowState createState() => _SlideshowState();
}

/// The slideshow widget.
class _SlideshowState extends State<Slideshow> {
  int _currentIndex = 0;

  final CarouselSliderController _carouselSliderController =
      CarouselSliderController();

  @override
  Widget build(BuildContext context) {
    final AppConfig appConfig = Provider.of<AppConfig>(context);
    final double deviceWidth = getDeviceQuery(context).width;
    final Size size = getAspectRatioSize(deviceWidth,
        aspecHeight: widget.aspectRatioHeight,
        aspecWidth: widget.aspectRatioWidth);

    return Stack(
      alignment: Alignment.center,
      children: [
        CarouselSlider(
          items: widget.slides.map((url) {
            return GestureDetector(
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => const SignInScreen()),
                );
              },
              child: Container(
                width: size.width,
                height: size.height,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(appConfig.borderRadius),
                  image: DecorationImage(
                    image: NetworkImage(url),
                    fit: BoxFit.cover,
                  ),
                ),
              ),
            );
          }).toList(),
          carouselController: _carouselSliderController,
          options: CarouselOptions(
            height: size.height,
            viewportFraction: 0.99,
            enlargeCenterPage: true,
            autoPlay: true,
            autoPlayInterval: const Duration(seconds: 3),
            autoPlayAnimationDuration: const Duration(seconds: 1),
            autoPlayCurve: Curves.linearToEaseOut,
            onPageChanged: (index, reason) {
              setState(() {
                _currentIndex = index;
              });
            },
          ),
        ),
        Positioned(
          left: 0,
          child: IconButton(
            onPressed: () => _carouselSliderController.previousPage(),
            icon: const Icon(
              LineAwesomeIcons.angle_left_solid,
              size: 20,
              color: Colors.white,
            ),
          ),
        ),
        Positioned(
          right: 0,
          child: IconButton(
            onPressed: () => _carouselSliderController.nextPage(),
            icon: const Icon(
              LineAwesomeIcons.angle_right_solid,
              size: 20,
              color: Colors.white,
            ),
          ),
        ),
        Positioned(
          bottom: 10,
          child: AnimatedSmoothIndicator(
            activeIndex: _currentIndex,
            count: widget.slides.length,
            curve: Curves.linearToEaseOut,
            effect: const ExpandingDotsEffect(
              dotHeight: 5,
              dotWidth: 5,
              activeDotColor: Colors.grey,
              dotColor: Colors.white,
            ),
            onDotClicked: (index) {
              _carouselSliderController.animateToPage(index);
            },
          ),
        )
      ],
    );
  }
}
