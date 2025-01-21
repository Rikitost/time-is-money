import { supabase } from '../../lib/supabaseClient';

export default async function Home() {
  const { data, error } = await supabase.from('meeting').select('*');
  if (error) {
    console.error('Error fetching data:', error);
  }

  return (
    <div>
      <h1>Supabase Data</h1>
      <p>Check the console for the data</p>
      <pre>{JSON.stringify(data, null, 3)}</pre>
    </div>
  );
}

