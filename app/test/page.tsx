import Button from './Button'

export default function Page() {
  console.log('BETTER_AUTH_SECRET', process.env.BETTER_AUTH_SECRET)
  console.log('BETTER_AUTH_URL', process.env.BETTER_AUTH_URL)
  console.log('NEXT_PUBLIC_SUPABASE_URL', process.env.NEXT_PUBLIC_SUPABASE_URL)

  return (
    <div>
      <h1>Page</h1>

      <Button />
    </div>
  )
}
