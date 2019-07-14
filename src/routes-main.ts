import { routesLogin } from './routes-login'

export function routesMain({ apiRouter }: RoutesOptions) {
  routesLogin({ apiRouter })
}
