# PokemonGo-Bot-Mobile

The cross-platform (iOS, Android) mobile app for PokemonGo-Bot is a work in progress!

## Installation
Checkout this repository, then `cd` to it.
- `cd PokemonGo-Bot-Mobile/mobile-app`
- `npm install`
- `bower install`
- `gulp` to build and preview app in a web browser

This project uses Ionic for programming the mobile app. The Ionic project files can be found in `PokemonGo-Bot-Mobile/mobile-app`.

The backend architecture is currently undecided. However, a simple proof-of-concept for a Python websocket server can be found in `PokemonGo-Bot-Mobile/backend`.

## Testing on iOS/Android
The skeleton code for this project was generated with [generator-m-ionic](https://github.com/mwaylabs/generator-m-ionic/). [See their development reference](https://github.com/mwaylabs/generator-m-ionic/blob/master/docs/guides/development_intro.md) for the list of the `gulp` commands to build & emulate/run the code on iOS and Android devices. See [Ionic's documentation & guide](http://ionicframework.com/docs/guide/) for details on how to use the Ionic framework.

## Development

To contribute, fork this repo. Make all development changes to the branch `dev`. After you've committed your code changes, push to your fork repo and make a pull request.

## TODO:
- [ ] Google Authentication
- [ ] PTC Authentication
- [ ] API to communicate with Python
- [x] Google Map (the Google Maps API key included in index.html is for use in in development only on http://localhost)
- [ ] Show sidemenu button & Google Map only when user is logged-in and authenticated
