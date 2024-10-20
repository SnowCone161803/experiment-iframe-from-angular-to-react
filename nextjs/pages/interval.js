
export function everySecond(request, setter) {
  const intv = setInterval(() => {
    const res = request()
    if (setter) {
      if (typeof(res) === 'object' && res.then) {
        res.then(c => setter(c))
      } else {
        setter(res)
      }
    }
  }, 1000)
  return () => clearInterval(intv)
}
