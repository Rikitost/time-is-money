'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const CreateMeeting = () => {
    router.push('/createmeeting');
  };

  const JoinMeeting = () => {
    router.push('/joinmeeting');
  };

  return(
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-900">Time is Money</h1>
      <p className="mt-2 text-gray-600">踊る会議はやめましょう</p>
      <div className="mt-8 space-y-4">
        <button
        onClick={CreateMeeting}
        className="w-64 py-3 text-lg font-semibold text-white bg-indigo-400 rounded-full hover:bg-indigo-500 transition">
          会議を始める
        </button>
        <button
        onClick={JoinMeeting}
        className="w-64 py-3 text-lg font-semibold text-white bg-pink-300 rounded-full hover:bg-pink-400 transition">
          会議に参加する
        </button>
      </div>
    </div>
    );


    // import { supabase } from '../../lib/supabaseClient';

  // const { data, error } = await supabase.from('meeting').select('*');
  // if (error) {
  //   console.error('Error fetching data:', error);
  // }

  // return (
  //   <div>
  //     <h1>Supabase Data</h1>
  //     <p>Check the console for the data</p>
  //     <pre>{JSON.stringify(data, null, 3)}</pre>
  //   </div>
  // );
}

