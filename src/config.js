
const classNames = {
  pluginLoaded: 'pluginLoaded',
  slide: 'slide',
  slides: 'slides',
  back: 'back',
  init: 'init',
  current: 'current',
  previous: 'previous',
  next: 'next'
}

const PLUGIN_DEFAULTS = {
  classNames,
  onSlide: null,
  onEnd: null,
  speed: 250,
  spring: 100,
  snapBackAt: 0.25,
  initialSlide: 0
}

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
