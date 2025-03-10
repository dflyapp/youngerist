'use client'

import { authClient } from '../../src/lib/client'

export default function Button() {
  return (
    <>
      <p>process env BETTER_AUTH_SECRET {process.env.BETTER_AUTH_SECRET}</p>
      <p>process env DATABASE_URL {process.env.DATABASE_URL}</p>
      <p>process env BETTER_AUTH_URL {process.env.BETTER_AUTH_URL}</p>
      <p>
        process env NEXT_PUBLIC_SUPABASE_URL{' '}
        {process.env.NEXT_PUBLIC_SUPABASE_URL}
      </p>
      <button
        onClick={async () => {
          const { data, error } = await authClient.signUp.email(
            {
              email: 'duongital@gmail.com', // user email address
              password: 'thanhtraTRA123!', // user password -> min 8 characters by default
              name: 'Duong', // user display name
              //   image: '', // user image url (optional)
              callbackURL: '/', // a url to redirect to after the user verifies their email (optional)
            },
            {
              onRequest: (ctx) => {
                //show loading
              },
              onSuccess: (ctx) => {
                //redirect to the dashboard or sign in page
              },
              onError: (ctx) => {
                // display the error message
                alert(ctx.error.message)
              },
            }
          )
          console.log({ data, error })
        }}
      >
        Register
      </button>
    </>
  )
}
