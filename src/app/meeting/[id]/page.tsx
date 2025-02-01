'use client';

import { notFound } from 'next/navigation';

export default function MeetingPage({ params }: { params: { id: string } }) {
  const meetingId = params.id;

  // 仮のデータ取得処理（Supabaseから取得する場合はfetchなどを使用）
  const fetchMeetingData = (id: string) => {
    // 実際はAPIからデータを取得する
    const mockData = {
      id: '1aT4g6o8',
      agenda: 'プロジェクト進捗会議',
      limit_time: 50,
    };
    return id === mockData.id ? mockData : null;
  };

  const meetingData = fetchMeetingData(meetingId);

  if (!meetingData) {
    notFound(); // 404ページを表示
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">会議ID: {meetingId}</h1>
        <p className="mb-2">議題: {meetingData?.agenda}</p>
        <p className="mb-2">制限時間: {meetingData?.limit_time}分</p>
        <button
          className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          onClick={() => alert('会議が開始されました')}
        >
          会議を開始する
        </button>
      </div>
    </div>
  );
}
