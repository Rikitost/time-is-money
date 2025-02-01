'use client';
import React from 'react';

export default function Home() {
  const mockData = {
    agenda: "プロジェクト進捗会議",
    members: 4,
    limitTime: 50,
    connectionId: "1aT4g6o8",
    connectionPassword: "12345678",
    url: "https://example.com/meeting/1",
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(mockData.url);
    alert("会議のURLをコピーしました！");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-green-100 p-6 rounded-2xl shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-4">踊る会議はやめましょう</h1>

        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">今回の議題</label>
          <input
            type="text"
            value={mockData.agenda}
            readOnly
            className="w-full p-2 border border-green-400 rounded-lg bg-white"
          />
        </div>

        <div className="mb-4">
          <p className="text-gray-700">待機中のメンバー：{mockData.members}人</p>
          <p className="text-gray-700">会議時間：{mockData.limitTime}分</p>
          <p className="text-gray-700">ID：{mockData.connectionId}</p>
          <p className="text-gray-700">パスワード：{mockData.connectionPassword}</p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <p className="text-blue-500 underline cursor-pointer" onClick={copyToClipboard}>
            会議のURLをコピー
          </p>
          <p className="text-gray-700 truncate">URL：{mockData.url}</p>
        </div>

        <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
          会議を開始する
        </button>
      </div>
    </div>
  );
}
