import * as KoaBody from 'koa-body'
import { Middleware } from 'koa'

export let koaBody = KoaBody()

// deps: appSession, koaBody
export let koaAk: Middleware = async (ctx, next) => {
  let { ak } = ctx.request.body
  if (ctx.session.ak !== ak) {
    let err = new Error('ak not correct')
    err.status = 403
    throw err
  }
  await next()
}

// todo koaJson, koaAk
