# Configuration
<p align="center"><img width="300" src="https://cdn.rawgit.com/pixelass/paraglider/master/paraglider.svg" alt="logo"/></p>

<!-- toc -->

- [Class names](#class-names)
- [Options](#options)
  * [Loop](#loop)
  * [Visible slides](#visible-slides)
  * [Amount of next slides](#amount-of-next-slides)
  * [Enable Touch](#enable-touch)
  * [Enable Swipe](#enable-swipe)
  * [Initial slide](#initial-slide)
  * [Threshold](#threshold)
  * [Snap back](#snap-back)
    + [Speed and duration](#speed-and-duration)
  * [Add classes](#add-classes)
- [Callbacks](#callbacks)
  * [Initialized](#initialized)
  * [Destroyed](#destroyed)
  * [Sliding](#sliding)
  * [Finished](#finished)

<!-- tocstop -->

## Class names

* `{object} classNames`
  * Mapping of class names to be used by the plugin.
* `{string} [classNames.pluginLoaded='pluginLoaded']`
  * Applied when the plugin has been loaded
* `{string} [classNames.init='init']`
  * Applied when the plugin has been initialized. Removed on first interaction.
* `{string} [classNames.slides='slides']`
  * This element will be used to track touches. This is the wrapper around the slides.
* `{string} [classNames.slide='slide']`
  * Selector for each single slide.
* `{string} [classNames.current='current']`
  * Applied to the currently visible slide
* `{string} [classNames.previous='previous']`
  * Applied to the previous slide in the queue
* `{string} [classNames.next='next']`
  * Applied to the next slide in the queue
* `{object} addClasses`
  * Map of class names to be added to slides.
* `{object} [addClasses.previous=true]`
  * Sets previous class name to slides.
* `{object} [addClasses.current=true]`
  * Sets current class name to slides.
* `{object} [addClasses.next=true]`
  * Sets next class name to slides.
* `{object} addMultiClasses`
  * Map of class names to be added to slides using a counter.
* `{object} [addMultiClasses.previous=undefined]`
  * Sets previous class name to slides using a counter.
* `{object} [addMultiClasses.current]`
  * Sets current class name to slides using a counter.
* `{object} [addMultiClasses.next=undefined]`
  * Sets next class name to slides using a counter.


## Options

* `{boolean} [enableTouch=true]`
  * Enable touch interaction.
* `{boolean} [enableSwipe=true]`
  * Enable mouse/drag/swipe interaction.
* `{boolean} [loop=false]`
  * Enable looping slides.
* `{number} [speed=250]`
  * Animation duration when using paging.
* `{number} [spring=100]`
  * Animation duration when snapping.
* `{number} [snapBackAt=0.25]`
  * Amount of distance needed to snap. [0, 1]
* `{number} [threshold=10]`
  * Threshold of pixels until the sliding mechanisms is triggered.
* `{number} [initialSlide=0]`
  * Initially visible slide
* `{number} [visibleSlides=1]`
  * Amount of visible slides
* `{number} [slideBy=1]`
  * Amount of slides to slide on interaction

### Loop

`[loop=true] {boolean}`

Looping can be disabled with this flag.

> Warning! This does not work well when `visibleSlides > 1`.  
> Issue reports welcome  
> Contributions welcome  

```js
import {belt} from 'paraglider/presets'

belt(document.querySelector('.belt'), {loop: false})
```

### Visible slides

`[visibleSLides=1] {number}`

Show more than one slide. 

> Warning! This does not work well when `loop === false`.  
> Issue reports welcome  
> Contributions welcome  

```js
import {multiBelt} from 'paraglider/presets'

multiBelt(document.querySelector('.belt'), {visibleSlides: 3})
```

### Amount of next slides

`[slideBy=1] {number}`

Allows sliding by more than one item.

> Warning! Requires `visibleSlides >= slideBy`.  

```js
import {multiBelt} from 'paraglider/presets'

multiBelt(document.querySelector('.belt'), {visibleSlides: 3})
```

### Enable Touch

`[enableSwipe=true] {boolean}`

Disable or enable swiping with touch.

```js
import {belt} from 'paraglider/presets'

belt(document.querySelector('.belt'), {enableTouch: false})

```

### Enable Swipe

`[enableSwipe=true] {boolean}`

Disable or enable swiping with the mouse.

```js
import {belt} from 'paraglider/presets'

belt(document.querySelector('.belt'), {enableSwipe: false})

```

### Initial slide

`[initialSlide=0] {boolean}`

Set the initially active slide

```js
import {belt} from 'paraglider/presets'

belt(document.querySelector('.belt'), {initialSlide: 1})
```

### Threshold

`[threshold=10] {number}`

Pixel value before swiping will activate (helps on iOS to optimize scrolling).

> Warning! Creates a minor jump depending on the value.  
> 10px seems to be default for most developers and similar plugins.  

```js
import {multiBelt} from 'paraglider/presets'

multiBelt(document.querySelector('.belt'), {threshold: 5})
```

### Snap back

`[snapBackAt=0.25] {number}`

Progress needed to snap to the next slide. [0, 1]

```js
import {multiBelt} from 'paraglider/presets'

multiBelt(document.querySelector('.belt'), {snapBackAt: 0.5})
```

#### Speed and duration

`[speed=250] {number}`  

Speed defines the time the animation takes when `nextSlide` or `prevSlide` are called.  

`[spring=100] {number}`

Spring defines the time the animation takes when touch or mouse interaction is stopped (touchend, mouseup)

```js
import {belt} from 'paraglider/presets'

belt(document.querySelector('.belt'), {speed: 1000, spring: 300})
```

### Add classes

`addClasses {object}`  
* `previous {boolean}`
* `current {boolean}`
* `next {boolean}`

Allows defining if class names should be added to the slides.

`addMultiClasses {object}`  
* `previous {boolean}`
* `current {boolean}`
* `next {boolean}`

Allows defining if class names should be added to the slides if multiple are visible.

`current__0, current__1, ...`

```js
import {belt} from 'paraglider/presets'

belt(document.querySelector('.belt'), {addClasses: {current: true}})
```


## Callbacks

* `{(null|onInit)} [onInit=null]`
  * Callback when the slider has been created.
* `{(null|onDestroy)} [onDestroy=null]`
  * Callback when the slider has been destroyed.
* `{(null|onSlide)} [onSlide=null]`
  * Callback while the slider is moving.
* `{(null|onEnd)} [onEnd=null]`
  * Callback while the slider stopped moving.

### Initialized

`[onInit=null] {null|function}`  

Defaults to null and does nothing. Can be a function with parameters

```js
import Glider from 'paraglider'

const glider = new Glider({
  onInit({previous, current, next, rest}, slides, options) {
    slides[current].style.transform = 'translate3d(0,0,0)'
  }
})
```

### Destroyed

`[onDestroy=null] {null|function}`  

Defaults to null and does nothing. Can be a function

```js
import Glider from 'paraglider'

const glider = new Glider({
  onDestroy() {
    // ...
  }
})
```

### Sliding

`[onSlide=null] {null|function}`  

Defaults to null and does nothing. Can be a function with parameters

```js
import Glider from 'paraglider'

const glider = new Glider({
  onSlide(progress, {previous, current, next, rest}, slides, options) {
    slides[current].style.transform = 'translate3d(${100 * progress}%,0,0)'
    // ...
  }
})
```

### Finished

`[onEnd=null] {null|function}`  

Defaults to null and does nothing. Can be a function with parameters

```js
import Glider from 'paraglider'

const glider = new Glider({
  onEnd({previous, current, next, rest}, slides, options) {
    slides[current].style.transform = 'translate3d(0,0,0)'
  }
})
```

© 2017 by [Gregor Adams](greg@pixelass.com)

Images in Demos via [chrisaitken](https://www.flickr.com/photos/chrisaitken/) on [Flickr](https://www.flickr.com)  
Logo via [onlinewebfonts](http://www.onlinewebfonts.com)
