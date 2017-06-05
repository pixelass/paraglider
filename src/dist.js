/**
 * Globally assigned version of Paraglider.
 *
 * @file dist.js
 * @module dist
 * @author Gregor Adams <greg@pixelass.com>
 */

import API from './glider'
import * as presets from './presets'
import wrapper from './presets/wrapper'

/**
 * Global Paraglider
 * @type {object}
 * @prop {function} API
 * @prop {function} wrapper
 * @prop {function} belt
 * @prop {function} coverLeft
 * @prop {function} coverRight
 * @prop {function} coverLeftRight
 */
global.Paraglider = {
  API,
  wrapper,
  ...presets
}
