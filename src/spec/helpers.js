import test from 'ava'
import {
  eitherOr,
  modLoop
} from '../helpers'

test('modLoop returns a number', t => {
  t.true(typeof modLoop(1, 2, 3) === 'number')
  t.true(typeof modLoop(2, 3, 4) === 'number')
})

test('modLoop returns a number greater or equal to 0', t => {
  t.true(modLoop(1, 2, 3) >= 0)
  t.true(modLoop(2, 3, 4) >= 0)
})

test('modLoop returns the correcct value', t => {
  t.true(modLoop(1, 2, 3) === 0)
  t.true(modLoop(2, 3, 4) === 1)
  t.true(modLoop(2, -3, 4) === 3)
  t.true(modLoop(20, -3, 20) === 17)
  t.true(modLoop(20, -30, 20) === 10)
})

test('eitherOr returns a either one or the other value', t => {
  const a = 1
  const b = 2
  const result = eitherOr(a, b)
  t.true((result === a) || (result === b))
})

test('eitherOr accepts any number as valid', t => {
  t.true(eitherOr(0, 9) === 0)
  t.true(eitherOr(1000, 9) === 1000)
  t.true(eitherOr(-20, 9) === -20)
})

test('eitherOr can work with multiple falsy parameters', t => {
  t.true(eitherOr('', 'foo') === 'foo')
  t.true(eitherOr(null, 'foo') === 'foo')
  t.true(eitherOr(false, 'foo') === 'foo')
  t.true(eitherOr(Boolean(0), 'foo') === 'foo')
  let foo
  t.true(eitherOr(foo, 'foo') === 'foo')
})
