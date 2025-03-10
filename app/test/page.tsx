import { createClient } from 'utils/supabase/server';
import { testLogging } from './action'
import Button from './Button'

export default async function Page() {
  const supabase = await createClient();
  const { data: instruments } = await supabase.from("user").select();

  return (
    <div>
      <h1>Page</h1>
      <pre>{JSON.stringify(instruments, null, 2)}</pre>

      <Button />
      <button onClick={testLogging}>Test Server Action</button>
    </div>
  )
}
