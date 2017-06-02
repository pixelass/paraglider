
/**
 * Default classList for the plugin.
 * This object can be replaced but not merged
 * @type {object}
 * @prop {string} pluginLoaded Applied when the plugin has been loaded
 * @prop {string} init Applied when the pugin has been initialized. Removed on first interaction.
 * @prop {string} slides This element will be used to track touches. This is the wrapper around the slides.
 * @prop {string} slide Selector for each single slide.
 * @prop {string} current Appied to the currently visible slide
 * @prop {string} previous Applied to the previous slide in the queue
 * @prop {string} next Applied to the next slide in the queue
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
 * @type {object}
 * @prop {object} classNames Mapping of class names to be used by the plugin.
 * @prop {null|onSlide} onSlide Callback while the slider is moving.
 * @prop {null|onEnd} onEnd Callback while the slider stopped moving.
 * @prop {number} speed Animation duration when using paging.
 * @prop {number} spring Animation duration when snapping.
 * @prop {number} snapBackAt Amount of distance needed to snap. [0, 1]
 * @prop {number} threshold Threshold of pixels until the sliding mechanisms is triggered.
 * @prop {number} initialSlide Initially visible slide
 */
const PLUGIN_DEFAULTS = {
  classNames,
  onSlide: null,
  onEnd: null,
  speed: 250,
  spring: 100,
  snapBackAt: 0.25,
  threshold: 10,
  initialSlide: 0
}

/**
 * Defaults for the presets.
 * @type {object}
 * @prop {object} classNames Mapping of class names to be used by the plugin.
 * @prop {string} classNames.dot Selector for pager dots.
 * @prop {string} classNames.active Active class for pager dots.
 * @prop {string} classNames.nextButton Selector for the navigation to the next slide.
 * @prop {string} classNames.prevButton Selector for the navigation to the previous slide.
 */
const PRESET_DEFAULTS = {
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
