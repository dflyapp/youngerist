'use client'

import { useEffect } from 'react'
import { authClient } from '../../src/lib/client'
import { createClient } from 'utils/supabase/client'

export default function Button() {
  useEffect(() => {
    const getData = async () => {
      const supabase = await createClient()
      const { data: instruments } = await supabase.from('user').select()
      console.log("using supabase client: ", instruments)
    }

    getData()
  }, [])

  return (
    <>
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
