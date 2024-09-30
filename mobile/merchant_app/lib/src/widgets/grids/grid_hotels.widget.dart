import 'package:flutter/material.dart';
import 'package:merchant_app/src/models/hotel.model.dart';
import 'package:merchant_app/src/widgets/card/hotel_card.widget.dart';

class GridHotels extends StatelessWidget {
  final List<Hotel> hotels;
  const GridHotels({super.key, required this.hotels});

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      physics: const NeverScrollableScrollPhysics(),
      shrinkWrap: true,
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        childAspectRatio: 1 / 1,
      ),
      itemCount: hotels.length,
      itemBuilder: (context, index) {
        final hotel = hotels[index];
        return HotelCard(hotel: hotel);
      },
    );
  }
}
