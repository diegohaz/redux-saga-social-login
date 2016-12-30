# redux-saga-social-login
<p>
  <a href="http://standardjs.com"><img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard Style" /></a>
  <a href="https://travis-ci.org/diegohaz/redux-saga-social-login"><img src="https://img.shields.io/travis/diegohaz/redux-saga-social-login/master.svg?style=flat-square" alt="Build Status" /></a>
  <a href="https://codecov.io/gh/diegohaz/redux-saga-social-login/branch/master"><img src="https://img.shields.io/codecov/c/github/diegohaz/redux-saga-social-login/master.svg?style=flat-square" alt="Coverage Status" /></a>
</p>

This is an example on how to implement Facebook and Google login with redux-saga

![redux-saga mov](https://cloud.githubusercontent.com/assets/3068563/21574064/88251ff8-ced3-11e6-8c43-c211859beffe.gif)

It took me a while to figure it out. I'm just putting this code here so I can help other people since I've never found anything similar. 

Feel free to open an issue or send a PR if you find a bug or think something could be written in a different way.

This project was created with [ARc/redux](https://github.com/diegohaz/arc/tree/redux). Take a look there if you want to learn more about the project's structure.


## Download

Just clone the repository and remove the `.git` folder:

```sh
$ git clone https://github.com/diegohaz/redux-saga-social-login
$ cd redux-saga-social-login
$ rm -rf .git
$ npm install # or yarn
```

## Usage

You need to grab a [Google Client ID](https://developers.google.com/+/web/signin/) and a [Facebook App ID](https://developers.facebook.com) and put them into [`src/containers/App.js`](src/containers/App.js):
```js
const googleClientId = 'GOOGLE_CLIENT_ID.apps.googleusercontent.com'
const facebookAppId = 'FACEBOOK_APP_ID'
```

Then, just use `npm start` and open http://localhost:3000

Sagas are located in [`src/store/social/sagas.js`](src/store/social/sagas.js).

## License

MIT © [Diego Haz](https://github.com/diegohaz)
