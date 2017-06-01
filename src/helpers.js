const animate = (speed, from, to, callback) => {
  const now = Date.now()
  const step = (to - from) / speed
  const loop = () => {
    const then = Date.now()
    const diff = then - now
    const timeLeft = speed - diff

    if (timeLeft > 0) {
      global.requestAnimationFrame(loop)
      callback(from + (step * diff))
    } else {
      global.cancelAnimationFrame(loop)
      callback(to)
    }
  }
  return loop()
}

export {
  animate
}

export default {
  animate
}
