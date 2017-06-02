import API from './glider'
import * as presets from './presets'
import wrapper from './presets/wrapper'

global.Paraglider = {
  API,
  wrapper,
  ...presets
}
