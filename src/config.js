/**
 * Config data for Paraglider.
 *
 * @file config.js
 * @module config
 * @author Gregor Adams <greg@pixelass.com>
 */

/**
 * Default classList for the plugin.
 * This object can be replaced but not merged
 * @private
 * @type {object}
 * @property {string} pluginLoaded Applied when the plugin has been loaded
 * @property {string} init Applied when the plugin has been initialized. Removed on first interaction.
 * @property {string} slides This element will be used to track touches. This is the wrapper around the slides.
 * @property {string} slide Selector for each single slide.
 * @property {string} current Applied to the currently visible slide
 * @property {string} previous Applied to the previous slide in the queue
 * @property {string} next Applied to the next slide in the queue
 */
const classNames = {
  pluginLoaded: 'pluginLoaded',
  slide: 'slide',
  slides: 'slides',
  init: 'init',
  current: 'current',
  previous: 'previous',
  next: 'next'
}

/**
 * Defaults for the presets.
 * @type {object}
 * @property {object} [classNames]
 *   Mapping of class names to be used by the plugin.
 * @property {string} [classNames.pluginLoaded='pluginLoaded']
 *   Applied when the plugin has been loaded
 * @property {string} [classNames.init='init']
 *   Applied when the plugin has been initialized. Removed on first interaction.
 * @property {string} [classNames.slides='slides']
 *   This element will be used to track touches. This is the wrapper around the slides.
 * @property {string} [classNames.slide='slide']
 *   Selector for each single slide.
 * @property {string} [classNames.current='current']
 *   Applied to the currently visible slide
 * @property {string} [classNames.previous='previous']
 *   Applied to the previous slide in the queue
 * @property {string} [classNames.next='next']
 *   Applied to the next slide in the queue
 * @property {object} [addClasses]
 *   Map of class names to be added to slides.
 * @property {object} [addClasses.previous=true]
 *   Sets previous class name to slides.
 * @property {object} [addClasses.current=true]
 *   Sets current class name to slides.
 * @property {object} [addClasses.next=true]
 *   Sets next class name to slides.
 * @property {object} [addMultiClasses]
 *   Map of class names to be added to slides using a counter.
 * @property {object} [addMultiClasses.previous=undefined]
 *   Sets previous class name to slides using a counter.
 * @property {object} [addMultiClasses.current]
 *   Sets current class name to slides using a counter.
 * @property {object} [addMultiClasses.next=undefined]
 *   Sets next class name to slides using a counter.
 * @property {boolean} [enableTouch=true]
 *   Enable touch interaction.
 * @property {boolean} [enableSwipe=true]
 *   Enable mouse/drag/swipe interaction.
 * @property {boolean} [loop=false]
 *   Enable looping slides.
 * @property {?onInit} [onInit=null]
 *   Callback when the slider has been created.
 * @property {?onDestroy} [onDestroy=null]
 *   Callback when the slider has been destroyed.
 * @property {?onSlide} [onSlide=null]
 *   Callback while the slider is moving.
 * @property {?onEnd} [onEnd=null]
 *   Callback while the slider stopped moving.
 * @property {number} [speed=250]
 *   Animation duration when using paging.
 * @property {number} [spring=100]
 *   Animation duration when snapping.
 * @property {number} [snapBackAt=0.25]
 *   Amount of distance needed to snap. [0, 1]
 * @property {number} [threshold=10]
 *   Threshold of pixels until the sliding mechanisms is triggered.
 * @property {number} [initialSlide=0]
 *   Initially visible slide
 * @property {number} [visibleSlides=1]
 *   Amount of visible slides
 * @property {number} [slideBy=1]
 *   Amount of slides to slide on interaction
 */
const PLUGIN_DEFAULTS = {
  classNames,
  addClasses: {previous: true, current: true, next: true},
  addMultiClasses: {current: true},
  enableTouch: true,
  enableSwipe: true,
  loop: true,
  onInit: null,
  onDestroy: null,
  onSlide: null,
  onEnd: null,
  speed: 250,
  spring: 100,
  snapBackAt: 0.25,
  threshold: 10,
  initialSlide: 0,
  visibleSlides: 1,
  slideBy: 1
}

/**
 * Defaults for the presets.
 * @type {object}
 * @property {object} [classNames]
 *   Mapping of class names to be used by the plugin.
 * @property {string} [classNames.pluginLoaded='pluginLoaded']
 *   Applied when the plugin has been loaded
 * @property {string} [classNames.init='init']
 *   Applied when the plugin has been initialized. Removed on first interaction.
 * @property {string} [classNames.slides='slides']
 *   This element will be used to track touches. This is the wrapper around the slides.
 * @property {string} [classNames.slide='slide']
 *   Selector for each single slide.
 * @property {string} [classNames.current='current']
 *   Applied to the currently visible slide
 * @property {string} [classNames.previous='previous']
 *   Applied to the previous slide in the queue
 * @property {string} [classNames.next='next']
 *   Applied to the next slide in the queue
 * @property {string} [classNames.dot='dot']
 *   Selector for pager dots.
 * @property {string} [classNames.active='active']
 *   Active class for pager dots.
 * @property {string} [classNames.nextButton='nextButton']
 *   Selector for the navigation to the next slide.
 * @property {string} [classNames.prevButton='prevButton']
 *   Selector for the navigation to the previous slide.
 * @property {object} [addClasses]
 *   Map of class names to be added to slides.
 * @property {object} [addClasses.previous=true]
 *   Sets previous class name to slides.
 * @property {object} [addClasses.current=true]
 *   Sets current class name to slides.
 * @property {object} [addClasses.next=true]
 *   Sets next class name to slides.
 * @property {object} [addMultiClasses]
 *   Map of class names to be added to slides using a counter.
 * @property {object} [addMultiClasses.previous=undefined]
 *   Sets previous class name to slides using a counter.
 * @property {object} [addMultiClasses.current]
 *   Sets current class name to slides using a counter.
 * @property {object} [addMultiClasses.next=undefined]
 *   Sets next class name to slides using a counter.
 * @property {boolean} [enableTouch=true]
 *   Enable touch interaction.
 * @property {boolean} [enableSwipe=true]
 *   Enable mouse/drag/swipe interaction.
 * @property {boolean} [loop=false]
 *   Enable looping slides.
 * @property {?onInit} [onInit=null]
 *   Callback when the slider has been created.
 * @property {?onDestroy} [onDestroy=null]
 *   Callback when the slider has been destroyed.
 * @property {?onSlide} [onSlide=null]
 *   Callback while the slider is moving.
 * @property {?onEnd} [onEnd=null]
 *   Callback while the slider stopped moving.
 * @property {number} [speed=250]
 *   Animation duration when using paging.
 * @property {number} [spring=100]
 *   Animation duration when snapping.
 * @property {number} [snapBackAt=0.25]
 *   Amount of distance needed to snap. [0, 1]
 * @property {number} [threshold=10]
 *   Threshold of pixels until the sliding mechanisms is triggered.
 * @property {number} [initialSlide=0]
 *   Initially visible slide
 * @property {number} [visibleSlides=1]
 *   Amount of visible slides
 * @property {number} [slideBy=1]
 *   Amount of slides to slide on interaction
 */
const PRESET_DEFAULTS = {
  ...PLUGIN_DEFAULTS,
  classNames: {
    ...classNames,
    dot: 'dot',
    active: 'active',
    nextButton: 'nextButton',
    prevButton: 'prevButton'
  }
}

export {
  classNames,
  PLUGIN_DEFAULTS,
  PRESET_DEFAULTS
}
