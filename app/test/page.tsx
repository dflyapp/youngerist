import Button from "./Button"

export default function Page() {
  return (
    <div>
      <h1>Page</h1>
      <p>process env {process.env.BETTER_AUTH_SECRET}</p>
      <p>process env {process.env.DATABASE_URL}</p>
      <p>process env {process.env.BETTER_AUTH_URL}</p>
      <p>process env NEXT_PUBLIC_SUPABASE_URL {process.env.NEXT_PUBLIC_SUPABASE_URL}</p>
      <Button />
    </div>
  )
}
