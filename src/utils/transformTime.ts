export function transformTime(time: number) {
  if (time > 1000 * 60 * 60) {
    return `${(time / (1000 * 60 * 60)).toFixed(2)}h`
  } else if (time > 1000 * 60) {
    return `${(time / (1000 * 60)).toFixed(2)}m`
  } else if (time > 1000) {
    return `${(time / 1000).toFixed(2)}s`
  }
  return `${time}ms`
}
