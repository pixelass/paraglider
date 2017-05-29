/* global document */
import {helloSpan} from '../src/hello-world'
import './main.css' // eslint-disable-line import/no-unassigned-import

const headline = document.createElement('h3')

headline.innerHTML = helloSpan()
document.getElementById('app').appendChild(headline)
