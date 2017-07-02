# Usage

<p align="center"><img width="300" src="https://cdn.rawgit.com/pixelass/paraglider/master/paraglider.svg" alt="logo"/></p>

<!-- toc -->

- [Wrappers](#wrappers)
  * [Wrapper](#wrapper)
  * [Multi wrapper](#multi-wrapper)
- [Presets](#presets)
  * [Belt](#belt)
  * [Multi belt](#multi-belt)
  * [Cover](#cover)

<!-- tocstop -->

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
    slides[previous].style.transform = 'translate3d(-100%,0,0)'
    slides[next].style.transform = 'translate3d(100%,0,0)'
  }
})
glider.init(document.querySelector('.glide-me'))
```

## Wrappers

### Wrapper

If you want to wrap your slider to use pagers and/or navigation you can use the provided helper.
The API and configuration remains the same.

```js
import wrapper from 'paraglider/lib/presets/wrapper'

const belt = (glider, opts) => wrapper(glider, {
  ...opts,
  onSlide(progress, {next, previous, current, rest}, slides) {
    if (previous !== null) {
      slides[previous].style.transform = `translate3d(${-100 + (progress * 100)}%,0,0)`
      slides[current].style.transform = `translate3d(${(progress * 100)}%,0,0)`
    } else if (next !== null) {
      slides[next].style.transform = `translate3d(${100 - (progress * 100)}%,0,0)`
      slides[current].style.transform = `translate3d(${(progress * -100)}%,0,0)`
    }
    if (typeof opts.onSlide === 'function') {
      opts.onSlide(progress, {next, previous, current, rest}, slides)
    }
  },
  onEnd({next, previous, current, rest}, slides) {
    [next, previous, ...rest].forEach(slide => {
      slides[slide].style.transform = 'translate3d(-100%,0,0)'
    })
    slides[current].style.transform = ''
    if (typeof opts.onEnd === 'function') {
      opts.onEnd({next, previous, current, rest}, slides)
    }
  }
})
```

### Multi wrapper

Allows using `slideBy` and `visibleSlides` in a wrapper. (No pager dots)

```js
import multiWrapper from 'paraglider/lib/presets/multi-wrapper'

const multiBelt = (glider, opts) => multiWrapper(glider, {
  ...opts,
  onInit({next, previous, current, rest}, slides) {
    current.forEach((id, index) => {
      slides[id].style.transform = `translate3d(${index * 100}%,0,0)`
    })
  },
  onSlide(progress, {next, previous, current, rest}, slides, {slideBy}) {
    if (previous !== null) {
      if (current.length > 0) {
        current.forEach((id, index) => {
          slides[id].style.transform = `translate3d(${(index * 100) + (progress * 100)}%,0,0)`
        })
      } else {
        slides[current].style.transform = `translate3d(${progress * 100}%,0,0)`
      }
      if (previous.length > 0) {
        previous.forEach((id, index) => {
          slides[id].style.transform = `translate3d(${((slideBy - 1) * -100) + (index * 100) + (progress * 100) - 100}%,0,0)`
        })
      } else {
        slides[previous].style.transform = `translate3d(${(progress * 100) - 100}%,0,0)`
      }
    } else if (next !== null) {
      if (current.length > 0) {
        current.forEach((id, index) => {
          slides[id].style.transform = `translate3d(${(index * 100) - (progress * 100)}%,0,0)`
        })
      } else {
        slides[current].style.transform = `translate3d(${(progress * -100)}%,0,0)`
      }
      if (next.length > 0) {
        next.forEach((id, index) => {
          slides[id].style.transform = `translate3d(${(slideBy * 100) + (index * 100) - (progress * 100)}%,0,0)`
        })
      } else {
        slides[next].style.transform = `translate3d(${100 - (progress * 100)}%,0,0)`
      }
    }
  },
  onEnd({next, previous, current, rest}, slides) {
    const currentIndexes = current.length > 0 ? current : current ? current : []
    slides.filter((id, i) => currentIndexes.indexOf(i) > -1).forEach(slide => {
      slide.style.transform = 'translate3d-1%,0,0)'
    })
    current.forEach((id, index) => {
      slides[id].style.transform = `translate3d(${index * 100}%,0,0)`
    })
  }
})
```

## Presets

### Belt

A simple belt slider

```js
import {belt} from 'paraglider/presets'

belt(document.querySelector('.belt'))
```

### Multi belt

A belt slider that allows having multiple visible slides.

```js
import {multiBelt} from 'paraglider/presets'

multiBelt(document.querySelector('.belt', {visibleItems: 2}))
```

### Cover

Covers the current slide.

```js
import {coverRight, coverLeft, coverLeftRight} from 'paraglider/presets'

coverLeft(document.querySelector('.coverLeft'))
coverRight(document.querySelector('.coverRight'))
coverLeftRight(document.querySelector('.coverLeftRight'))
```

© 2017 by [Gregor Adams](greg@pixelass.com)
