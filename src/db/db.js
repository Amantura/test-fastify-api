import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { dbParams } from '@/config'


const queryString = `postgres://${dbParams.DB_USER}:${dbParams.DB_PASSWORD}@${dbParams.DB_HOST}:${dbParams.DB_PORT}/${dbParams.DB_NAME}`
const queryClient = postgres(queryString)
export const db = drizzle(queryClient)