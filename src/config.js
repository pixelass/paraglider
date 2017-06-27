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
 * @property {string} init Applied when the pugin has been initialized. Removed on first interaction.
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
 * Defaults for the main plugin.
 * @private
 * @type {object}
 * @property {object} classNames Mapping of class names to be used by the plugin.
 * @property {string} classNames.pluginLoaded Applied when the plugin has been loaded
 * @property {string} classNames.init Applied when the pugin has been initialized. Removed on first interaction.
 * @property {string} classNames.slides This element will be used to track touches. This is the wrapper around the slides.
 * @property {string} classNames.slide Selector for each single slide.
 * @property {string} classNames.current Applied to the currently visible slide
 * @property {string} classNames.previous Applied to the previous slide in the queue
 * @property {string} classNames.next Applied to the next slide in the queue
 * @property {(null|onInit)} onInit Callback when the slider has been created.
 * @property {(null|onDestroy)} onDestroy Callback when the slider has been destroyed.
 * @property {(null|onSlide)} onSlide Callback while the slider is moving.
 * @property {(null|onEnd)} onEnd Callback while the slider stopped moving.
 * @property {number} speed Animation duration when using paging.
 * @property {number} spring Animation duration when snapping.
 * @property {number} snapBackAt Amount of distance needed to snap. [0, 1]
 * @property {number} threshold Threshold of pixels until the sliding mechanisms is triggered.
 * @property {number} initialSlide Initially visible slide
 * @property {number} visibleSlides Amount of visible slides
 * @property {number} slideBy Amount of slides to slide on interaction
 */
const PLUGIN_DEFAULTS = {
  classNames,
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
 * @private
 * @type {object}
 * @property {object} classNames Mapping of class names to be used by the plugin.
 * @property {string} classNames.pluginLoaded Applied when the plugin has been loaded
 * @property {string} classNames.init Applied when the pugin has been initialized. Removed on first interaction.
 * @property {string} classNames.slides This element will be used to track touches. This is the wrapper around the slides.
 * @property {string} classNames.slide Selector for each single slide.
 * @property {string} classNames.current Applied to the currently visible slide
 * @property {string} classNames.previous Applied to the previous slide in the queue
 * @property {string} classNames.next Applied to the next slide in the queue
 * @property {string} classNames.dot Selector for pager dots.
 * @property {string} classNames.active Active class for pager dots.
 * @property {string} classNames.nextButton Selector for the navigation to the next slide.
 * @property {string} classNames.prevButton Selector for the navigation to the previous slide.
 * @property {(null|onInit)} onInit Callback when the slider has been created.
 * @property {(null|onDestroy)} onDestroy Callback when the slider has been destroyed.
 * @property {(null|onSlide)} onSlide Callback while the slider is moving.
 * @property {(null|onEnd)} onEnd Callback while the slider stopped moving.
 * @property {number} speed Animation duration when using paging.
 * @property {number} spring Animation duration when snapping.
 * @property {number} snapBackAt Amount of distance needed to snap. [0, 1]
 * @property {number} threshold Threshold of pixels until the sliding mechanisms is triggered.
 * @property {number} initialSlide Initially visible slide
 * @property {number} visibleSlides Amount of visible slides
 * @property {number} slideBy Amount of slides to slide on interaction
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
