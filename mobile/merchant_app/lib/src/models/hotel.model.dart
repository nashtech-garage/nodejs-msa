enum HotelState {
  NO_SERVICED,
  IN_SERVICED,
  SERVICED,
}

class Hotel {
  final String name;
  final String location;
  final double price;
  final HotelState state;

  Hotel({
    required this.name,
    required this.location,
    required this.price,
    this.state = HotelState.NO_SERVICED,
  });
}
