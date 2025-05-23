'use server'

export async function testLogging() {
  console.log('BETTER_AUTH_SECRET', process.env.BETTER_AUTH_SECRET)
  console.log('BETTER_AUTH_URL', process.env.BETTER_AUTH_URL)
  console.log('NEXT_PUBLIC_SUPABASE_URL', process.env.NEXT_PUBLIC_SUPABASE_URL)
  console.log('NEXT_PUBLIC_SUPABASE_URL2', process.env.NEXT_PUBLIC_SUPABASE_URL2)
  console.log('DATABASE_URL', process.env.DATABASE_URL)

  console.log(
    JSON.stringify({
      severity: 'INFO',
      message: '✅ Cloud Run Structured Log',
      timestamp: new Date().toISOString(),
    })
  )
}
