# Disclaimer
©2016 Niantic, Inc. ©2016 Pokémon. ©1995–2016 Nintendo / Creatures Inc. / GAME FREAK inc. © 2016 Pokémon/Nintendo Pokémon and Pokémon character names are trademarks of Nintendo. The Google Maps Pin is a trademark of Google Inc. and the trade dress in the product design is a trademark of Google Inc. under license to The Pokémon Company. Other trademarks are the property of their respective owners.
[Privacy Policy](http://www.pokemon.com/us/privacy-policy/)

[PokemonGo-Bot](https://github.com/PokemonGoF/PokemonGo-Bot) is intended for academic purposes and should not be used to play the game *PokemonGo* as it violates the TOS and is unfair to the community. Use the bot **at your own risk**.

[PokemonGoF](https://github.com/PokemonGoF) does not support the use of 3rd party apps or apps that violate the TOS.

# PokemonGo-Bot-Mobile

The cross-platform (iOS, Android) mobile app for PokemonGo-Bot is a work in progress!

![Login Screen](http://i.imgur.com/wHYgnVQ.png?1)

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
