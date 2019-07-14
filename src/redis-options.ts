let host = process.env.REDIS_HOST || 'localhost'
let port = process.env.REDIS_PORT || 6379

// todo config loader
export const redisOptions = { host, port }
