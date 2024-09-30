import 'package:flutter/material.dart';
import 'package:merchant_app/src/helpers/device.dart';
import 'package:merchant_app/src/models/hotel.model.dart';

class HotelCard extends StatelessWidget {
  final Hotel hotel;
  const HotelCard({super.key, required this.hotel});

  @override
  Widget build(BuildContext context) {
    final Size size =
        getAspectRatioSize(200, aspecHeight: 100, aspecWidth: 200);

    return Card(
      elevation: 2,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(5.0)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            height: size.height,
            width: size.width,
            decoration: const BoxDecoration(
              borderRadius: BorderRadius.all(Radius.circular(5.0)),
              image: DecorationImage(
                image: NetworkImage("https://picsum.photos/1080"),
                fit: BoxFit.cover,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
