import * as easingUtils from 'easing-utils'
import dataWrapper from '../src/presets/data-wrapper'
import {
  findAll as $
} from '../src/helpers'
import './layout.css' // eslint-disable-line import/no-unassigned-import
import {
  jsSlideshow,
  jsSlides,
  jsSlide,
  jsPager,
  jsDot,
  jsPrev,
  jsNext,
  jsCaption,
  jsHeadline,
  jsSubline,
  jsDescription
} from './hooks.css'
import {
  isLoaded,
  isInit,
  isDragging,
  isDraggable,
  isCurrent,
  isPrevious,
  isNext,
  isActive,
  isDisabled
} from './slideshow.css'

const classNames = {
  pluginLoaded: isLoaded,
  current: isCurrent,
  previous: isPrevious,
  next: isNext,
  init: isInit,
  slides: jsSlides,
  slide: jsSlide,
  pager: jsPager,
  dot: jsDot,
  active: isActive,
  previousButton: jsPrev,
  nextButton: jsNext,
  disabled: isDisabled,
  dragging: isDragging,
  draggable: isDraggable,
  caption: jsCaption,
  headline: jsHeadline,
  subline: jsSubline,
  description: jsDescription
}

const slideshows = $(`.${jsSlideshow}`)

slideshows.forEach(slideshow => dataWrapper(slideshow, {
  classNames,
  onInit({previous, next, current, rest}, {
    slides,
    captions,
    headlines,
    sublines,
    descriptions,
    pagers,
    dots
  }) {
    const notCurrent = [previous, next, ...rest]
    notCurrent.forEach(id => {
      slides[id].style.transform = 'translate3d(-100%,0,0)'
      if (pagers[id]) {
        dots[id].style.transform = 'scale3d(1,1,1)'
        dots[id].style.opacity = 1
      }
      if (captions[id]) {
        captions[id].style.transform = 'translate3d(0,100%,0)'
        headlines[id].style.opacity = 0
        sublines[id].style.opacity = 0
        descriptions[id].style.transform = 'translate3d(0,100%,0)'
      }
    })
    slides[current].style.transform = 'translate3d(0,0,0)'
    if (pagers[current]) {
      dots[current].style.transform = 'scale3d(0.5,0.5,1)'
      dots[current].style.opacity = 0.5
    }
    if (captions[current]) {
      captions[current].style.transform = 'translate3d(0,0,0)'
      headlines[current].style.opacity = 1
      sublines[current].style.opacity = 1
      descriptions[current].style.transform = 'translate3d(0,0,0)'
    }
  },
  onEnd({previous, next, current, rest}, {
    slides,
    captions,
    headlines,
    sublines,
    descriptions,
    pagers,
    dots
  }) {
    const notCurrent = [previous, next, ...rest]
    notCurrent.forEach(id => {
      slides[id].style.transform = 'translate3d(-100%,0,0)'
      if (pagers[id]) {
        dots[id].style.transform = 'scale3d(1,1,1)'
        dots[id].style.opacity = 1
      }
      if (captions[id]) {
        captions[id].style.transform = 'translate3d(0,100%,0)'
        headlines[id].style.opacity = 0
        sublines[id].style.opacity = 0
        descriptions[id].style.transform = 'translate3d(0,100%,0)'
      }
    })
    slides[current].style.transform = 'translate3d(0,0,0)'
    if (pagers[current]) {
      dots[current].style.transform = 'scale3d(0.5,0.5,1)'
      dots[current].style.opacity = 0.5
    }
    if (captions[current]) {
      captions[current].style.transform = 'translate3d(0,0,0)'
      headlines[current].style.opacity = 1
      sublines[current].style.opacity = 1
      descriptions[current].style.transform = 'translate3d(0,0,0)'
    }
  },
  onSlide(progress, {previous, next, current, rest}, {
    slides,
    captions,
    headlines,
    sublines,
    descriptions,
    pagers,
    dots,
    nextTrigger,
    prevTrigger
  }, options) {
    const easing = options.easing ? easingUtils[options.easing] || easingUtils.linear : easingUtils.linear
    const eased = easing(progress)
    const easedIn = easingUtils.easeInQuart(progress)
    const easedOut = easingUtils.easeOutQuart(progress)
    const scaleUp = 0.5 + (0.5 * easedOut)
    const scaleDown = 1 - (0.5 * easedOut)
    if (previous !== null) {
      slides[previous].style.transform = `translate3d(${-100 + (100 * eased)}%,0,0)`
      slides[current].style.transform = `translate3d(${100 * eased}%,0,0)`
      if (dots[previous]) {
        dots[previous].style.transform = `scale3d(${scaleDown},${scaleDown},1)`
        dots[previous].style.opacity = scaleDown
      }
      if (captions[previous]) {
        captions[previous].style.transform = `translate3d(0,${100 - (100 * easedOut)}%,0)`
        headlines[previous].style.opacity = easedIn
        sublines[previous].style.opacity = easedIn
        descriptions[previous].style.transform = `translate3d(${-100 + (100 * easedIn)}%,0,0)`
        descriptions[current].style.transform = `translate3d(${100 * easedOut}%,0,0)`
      }
    } else if (next !== null) {
      slides[next].style.transform = `translate3d(${100 - (100 * eased)}%,0,0)`
      slides[current].style.transform = `translate3d(${-100 * eased}%,0,0)`
      if (dots[next]) {
        dots[next].style.transform = `scale3d(${scaleDown},${scaleDown},1)`
        dots[next].style.opacity = scaleDown
      }
      if (captions[next]) {
        captions[next].style.transform = `translate3d(0,${100 - (100 * easedOut)}%,0)`
        headlines[next].style.opacity = easedIn
        sublines[next].style.opacity = easedIn
        descriptions[next].style.transform = `translate3d(${100 - (100 * easedIn)}%,0,0)`
        descriptions[current].style.transform = `translate3d(${-100 * easedOut}%,0,0)`
      }
    } else if (current === 0) {
      slides[current].style.transform = `translate3d(${100 * eased}%,0,0)`
      descriptions[current].style.transform = `translate3d(${100 * easedOut}%,0,0)`
    } else if (current === (slides.length - 1)) {
      slides[current].style.transform = `translate3d(${-100 * eased}%,0,0)`
      descriptions[current].style.transform = `translate3d(${-100 * easedOut}%,0,0)`
    }

    if (dots[current]) {
      dots[current].style.transform = `scale3d(${scaleUp},${scaleUp},1)`
      dots[current].style.opacity = scaleUp
    }
    if (captions[current]) {
      captions[current].style.transform = `translate3d(0,${100 * easedIn}%,0)`
      headlines[current].style.opacity = 1 - easedOut
      sublines[current].style.opacity = 1 - easedOut
    }
  }
}))
