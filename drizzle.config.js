import * as dotenv from 'dotenv'
dotenv.config()

export default {
  schema: './src/db/schemas/*',
  out: './src/db/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
  }
}