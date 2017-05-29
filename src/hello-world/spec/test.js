import test from 'ava'
import hello, {helloSpan} from '..'

test('hello() returns a string', t => {
  t.true(typeof hello() === 'string')
})

test('hello("NPM") returns "Hello NPM"', t => {
  t.true(hello('NPM') === 'Hello NPM')
})

test('hello("Nyan cat") returns "Hello Nyan cat"', t => {
  t.true(hello('Nyan cat') === 'Hello Nyan cat')
})

test('hello("🚀") returns "Hello 🚀"', t => {
  t.true(hello('🚀') === 'Hello 🚀')
})

test('hello() defaults to  "Hello World"', t => {
  t.true(hello() === 'Hello World')
})

test('helloSpan() returns a string', t => {
  t.true(typeof helloSpan() === 'string')
})

test('helloSpan("Nyan cat") returns "Hello Nyan cat" in a span', t => {
  t.true(helloSpan('Nyan cat') === '<span class="undefined">Hello Nyan cat</span>')
})

test('helloSpan() defaults to  "Hello World" in a span', t => {
  t.true(helloSpan() === '<span class="undefined">Hello World</span>')
})
