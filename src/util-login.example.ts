export function calcCaptcha(sk: string, date: number) {
  let dat = Math.round(date / (1000 * 60 * 2)) // 2分钟范围
  dat = Number(
    String(dat)
      .split('')
      .reverse()
      .join('')
  )
  let num = sk
    .split('')
    .map(s => s.charCodeAt(0))
    .reduce((acc, v, i) => {
      return acc + v * ((i % 3) + 1)
    }, 0)
  let r = dat % num
  return String(r).slice(-4) // 取后4位
}
