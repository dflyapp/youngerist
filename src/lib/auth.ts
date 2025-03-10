import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from '../../db/db' // your drizzle instance
import { user, session, account, verification } from '../../db/auth-schema'

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg', // or "mysql", "sqlite"
    schema: { user, account, session, verification },
  }),
  emailAndPassword: {
    enabled: true,
  },
})
