import * as Router from 'koa-router'

declare global {
  interface RoutesOptions {
    router?: Router
    apiRouter?: Router
  }

  interface Error {
    status?: number
  }
}
