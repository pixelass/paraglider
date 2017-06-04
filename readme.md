# paraglider

A Slider with parallax API.  
This slider does not do anything except for adding class names to the current, previous and next slide.  
With the help of callbacks however, you can implement any imaginable effect.

[![npm](https://img.shields.io/npm/v/paraglider.svg?style=flat-square)](https://www.npmjs.com/package/paraglider)
[![Standard Version](https://img.shields.io/badge/release-standard%20version-44aa44.svg?style=flat-square)](https://github.com/conventional-changelog/standard-version)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/pixelass/paraglider/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/pixelass/paraglider.svg?style=flat-square)](https://github.com/pixelass/paraglider/issues)

[![Travis branch](https://img.shields.io/travis/pixelass/paraglider/master.svg?style=flat-square)](https://travis-ci.org/pixelass/paraglider)
[![bitHound](https://img.shields.io/bithound/code/github/pixelass/paraglider.svg?style=flat-square)](https://www.bithound.io/github/pixelass/paraglider)
[![bitHound](https://img.shields.io/bithound/devDependencies/github/pixelass/paraglider.svg?style=flat-square)](https://www.bithound.io/github/pixelass/paraglider)
[![Coveralls](https://img.shields.io/coveralls/pixelass/paraglider.svg?style=flat-square)](https://coveralls.io/github/pixelass/paraglider)
[![Inline docs](http://inch-ci.org/github/pixelass/paraglider.svg?branch=master)](http://inch-ci.org/github/pixelass/paraglider)

[![Browserify](https://img.shields.io/badge/build-browserify-3c6991.svg?style=flat-square)](http://browserify.org/)
[![Babel](https://img.shields.io/badge/babel-stage--2-f5da55.svg?style=flat-square)](http://babeljs.io/docs/plugins/preset-stage-2/)
[![Babel](https://img.shields.io/badge/babel-transform--runtime-f5da55.svg?style=flat-square)](http://babeljs.io/docs/plugins/transform-runtime/)
[![code style xo](https://img.shields.io/badge/code_style-XO-64d8c7.svg?style=flat-square)](https://github.com/sindresorhus/xo)
[![test ava](https://img.shields.io/badge/test-🚀_AVA-0e1d5c.svg?style=flat-square)](https://github.com/avajs/ava)

[![yarn](https://img.shields.io/badge/yarn-friendly-2c8ebb.svg?style=flat-square)](https://yarnpkg.com/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-44aa44.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![CSS modules](https://img.shields.io/badge/css-modules-44aa44.svg?style=flat-square)](https://github.com/css-modules/css-modulesify)
[![CSS next](https://img.shields.io/badge/css-next-44aa44.svg?style=flat-square)](http://cssnext.io/)

<!-- toc -->

- [Links](#links)
- [Usage](#usage)
  * [Presets](#presets)
    + [Belt](#belt)
    + [Cover](#cover)
  * [Dist / CDN](#dist--cdn)
- [Developing](#developing)

<!-- tocstop -->

## Links
* [Demo](https://pixelass.github.io/paraglider/)
* [Dist Demo](https://pixelass.github.io/paraglider/dist.html)
* [Code examples](https://github.com/pixelass/paraglider/blob/master/demo/index.js)
* [Documentation](https://pixelass.github.io/paraglider/api/)

## Usage

```
yarn add paraglider
```

Take a look at the [examples](https://github.com/pixelass/paraglider/blob/master/demo/index.js). ([Demo](https://pixelass.github.io/paraglider/))

```js
import Glider from 'paraglider'

// A simple belt slider
const glider = new Glider({
  onSlide(progress, {next, previous, current, rest}, slides) {
    if (previous !== null) {
      slides[previous].style.transform = `translate3d(${-100 + (progress * 100)}%,0,0)`
      slides[current].style.transform = `translate3d(${(progress * 100)}%,0,0)`
    } else if (next !== null) {
      slides[next].style.transform = `translate3d(${100 - (progress * 100)}%,0,0)`
      slides[current].style.transform = `translate3d(${(progress * -100)}%,0,0)`
    }
  },
  onEnd({next, previous, current, rest}, slides) {
    rest.forEach(slide => {
      slides[slide].style.transform = ''
    })
    slides[current].style.transform = ''
    slides[previous].style.transform = 'translate(-100%,0,0)'
    slides[next].style.transform = 'translate(100%,0,0)'
  }
})
glider.init(document.querySelector('.glide-me'))
```

### Presets

#### Belt

A simple belt slider

```js
import {belt} from 'paraglider'

belt(document.querySelector('.belt'))
```

#### Cover

Covers the current slide.

```js
import {coverRight, coverLeft, coverLeftRight} from 'paraglider'

coverLeft(document.querySelector('.coverLeft'))
coverRight(document.querySelector('.coverRight'))
coverLeftRight(document.querySelector('.coverLeftRight'))
```

### Dist / CDN

You can use this plugin as a global plugin. ([Demo](https://pixelass.github.io/paraglider/dist.html))

`<script src="https://cdn.rawgit.com/pixelass/paraglider/<VERSION>/dist/paragliner.js"></script>`

Example:

* https://cdn.rawgit.com/pixelass/paraglider/v1.1.0/dist/paraglider.js
* https://cdn.rawgit.com/pixelass/paraglider/v1.1.0/dist/paraglider.min.js

## Developing

`yarn <command>`

* `start`: starts the dev server and builds the required files
* `test`: runs test and lints files
* `dev`: starts the dev server and watches the required files
* `babel`: generates lib from source
* `build`: builds all files from source
* `watch`: builds and watches all files from source
* `lint`: lints JavaScript files
* `release`: release new version using "standard-version"

© 2017 by [Gregor Adams](greg@pixelass.com)

Images via [chrisaitken](https://www.flickr.com/photos/chrisaitken/) on [Flickr](https://www.flickr.com)
