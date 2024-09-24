import 'package:flutter/material.dart';

class SearchTitleBar extends StatelessWidget {
  const SearchTitleBar({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        border: Border(
          bottom: BorderSide(color: Colors.black, width: 2),
        ),
      ),
      child: Row(
        children: [
          const Expanded(
              child: TextField(
            decoration: InputDecoration(
                border: InputBorder.none,
                contentPadding: EdgeInsets.all(20),
                hintText: 'Search',
                prefixIcon: SizedBox(
                  height: 20,
                  width: 20,
                  child: Icon(
                    Icons.search,
                  ),
                )),
          )),
          Row(
            children: [
              SizedBox(
                child: IconButton(
                    padding: const EdgeInsets.all(0),
                    onPressed: () => print('bell called'),
                    icon: Icon(Icons.notifications)),
              ),
              SizedBox(
                child: IconButton(
                    padding: const EdgeInsets.all(0),
                    onPressed: () => print('person called'),
                    icon: Icon(Icons.person)),
              ),
            ],
          )
        ],
      ),
    );
  }
}
