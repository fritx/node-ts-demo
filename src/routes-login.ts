import * as uuid4 from 'uuid/v4'
import { koaBody, koaAk } from './koa-middlewares'
import { calcCaptcha } from './util-login'
import { prefixSkFromAk } from './const'
import { redis } from './redis'

export function routesLogin({ apiRouter }: RoutesOptions) {
  // cpu/ratelimit sensitive?
  apiRouter.post('/user/token/gen', async ctx => {
    let sk = [uuid4(), uuid4(), uuid4()].join('-')
    let ak = uuid4()
    await redis.set(`${prefixSkFromAk}${ak}`, sk)
    ctx.body = { sk, ak }
  })

  apiRouter.post('/user/token/refresh', koaBody, koaAk, async ctx => {
    // doto
  })

  // cpu/ratelimit sensitive?
  apiRouter.post('/user/login', koaBody, async ctx => {
    let { ak, captcha } = ctx.request.body
    let date = await verifyLogin(ak, captcha)
    ctx.session = { ak, date }
  })

  apiRouter.post('/user/logout', koaBody, koaAk, async ctx => {
    ctx.session = null
  })
}

async function verifyLogin(ak: string, captcha: string): Promise<number> {
  let date = Date.now()
  let sk = await redis.get(`${prefixSkFromAk}${ak}`)
  let cap = calcCaptcha(sk, date)
  if (cap !== captcha) {
    let err = new Error('captcha not correct')
    err.status = 403
    throw err
  }
  return date
}
