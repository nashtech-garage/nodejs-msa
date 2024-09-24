import 'package:flutter/material.dart';
import 'package:line_awesome_flutter/line_awesome_flutter.dart';
import 'package:merchant_app/src/configs/config.app.dart';
import 'package:provider/provider.dart';

class SearchTitleBar extends StatefulWidget {
  const SearchTitleBar({super.key});

  @override
  State<SearchTitleBar> createState() => _SearchTitleBarState();
}

class _SearchTitleBarState extends State<SearchTitleBar> {
  final FocusNode _focusNode = FocusNode();
  bool _isActive = false;

  @override
  void initState() {
    super.initState();

    _focusNode.addListener(() {
      setState(() {
        _isActive = _focusNode.hasFocus;
      });
    });
  }

  @override
  void dispose() {
    _focusNode.dispose();
    super.dispose();
  }

  _onTapOutsided(PointerDownEvent event) {
    setState(() {
      _isActive = false;
    });
    FocusScope.of(context).unfocus();
  }

  _onTaped() {
    setState(() {
      _isActive = true;
    });
  }

  @override
  Widget build(BuildContext context) {
    final AppConfig appConfig = Provider.of<AppConfig>(context);
    final BorderRadius borderRadius =
        BorderRadius.all(Radius.circular(appConfig.borderRadius));

    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: borderRadius,
      ),
      child: Row(
        children: [
          Expanded(
            child: TextField(
              onTapOutside: _onTapOutsided,
              onTap: _onTaped,
              decoration: InputDecoration(
                enabledBorder: OutlineInputBorder(
                  borderSide: const BorderSide(
                    width: 1,
                    color: Colors.white,
                  ),
                  borderRadius: borderRadius,
                ),
                focusedBorder: OutlineInputBorder(
                  borderSide: BorderSide(
                    width: 1,
                    color: _isActive ? Colors.black : Colors.white,
                  ),
                  borderRadius: borderRadius,
                ),
                hintText: 'Search',
                prefixIcon: SizedBox(
                  child: IconButton(
                    onPressed: () => print('Searching called...'),
                    icon: const Icon(
                      LineAwesomeIcons.search_solid,
                      size: 20,
                    ),
                  ),
                ),
              ),
            ),
          ),
          Row(
            children: [
              SizedBox(
                child: IconButton(
                  onPressed: () => print('bell called'),
                  icon: const Icon(
                    LineAwesomeIcons.bell,
                    size: 20,
                  ),
                ),
              ),
              SizedBox(
                child: IconButton(
                  iconSize: 10,
                  onPressed: () => print('person called'),
                  icon: const Icon(
                    LineAwesomeIcons.user,
                    size: 20,
                  ),
                ),
              ),
            ],
          )
        ],
      ),
    );
  }
}
