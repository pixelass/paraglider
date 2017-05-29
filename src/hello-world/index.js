import styles from './style.css'

/**
 * Hello world function. Returns Hello + `name`
 * @param  {string} [name='World'] the `name` to use (defaults to `'World'`)
 * @returns {string} 'Hello' + `name`
 * @example
 * helloSpan() // => "Hello World"
 * helloSpan('pixelass') // => "Hello pixelass"
 */
const hello = (name = 'World') => `Hello ${name}`

/**
 * Hello world function. Returns Hello + `name` in a span
 * @param  {string} [name='World'] the `name` to use (defaults to `'World'`)
 * @returns {string} '<span class="hello">Hello' + `name` + '</span>'
 * @example
 * helloSpan() // => "<span class=\"hello\">Hello World</span>"
 * helloSpan('pixelass') // => "<span class=\"hello\">Hello pixelass</span>"
 */
const helloSpan = (name = 'World') => `<span class="${styles.hello}">${hello(name)}</span>`

export {helloSpan}

export default hello
