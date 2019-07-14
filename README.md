- [node-ts-demo](https://github.com/fritx/node-ts-demo)
- [koa-ts-demo](https://github.com/fritx/koa-ts-demo)
- [react-ts-demo](https://github.com/fritx/react-ts-demo)

### Changelog

- move `*.ts` to src/ and build to dist/
- tslint autofix => eslint prettier autofix
- ava test and npm scripts

**[node-app]**

- ts sourcemap support

**[koa]**

- koa, koa-helmet, koa-ratelimit, ioredis, koa error
- nodemon, koa-router, koa-body, api error
- dotenv-cli, redis options, const, koa-session, koa middlewares
- user/captcha login

### Todo

- definition for dist files

```sh
# Node version
# node >= 10

# Install dependencies
npm i

# Live build watch
npx tsc --watch

# Run demo
node dist/hello
```

```plain
- Dependencies
  - typescript 3.5.2
  - typescriot-eslint 1.11.0
  - eslint 6.0.1
  - prettier 1.18.2

- npmrc
  - packafge-lock=false

- tsconfig
  - `compilerOptions.outDir='./dist'`
  - `include='src/**/*.ts'`

- VS-Code Extensions
  - Prettier 1.9.0
  - ESLint 1.9.0
  - DotENV 1.0.1
```
