'use client';
import React from "react";
import { useState } from 'react';

export default function JoinMeeting() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleJoinMeeting = () => {
    console.log('ID:', id);
    console.log('パスワード:', password);
    // 会議に参加する処理をここに記述
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <p className="text-xl text-gray-700">踊る会議はやめましょう</p>
      <div className="mt-6 w-full max-w-md p-6 bg-pink-100 rounded-xl shadow-md">
        <h2 className="text-lg font-bold text-gray-800 mb-4">参加する会議</h2>
        <div className="mb-4">
          <label htmlFor="id" className="block text-sm font-medium text-gray-700">
            ID
          </label>
          <input
            id="id"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="mt-1 w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            パスワード
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
          />
        </div>
      </div>
      <button
        onClick={handleJoinMeeting}
        className="mt-6 w-64 py-3 text-lg font-semibold text-white bg-pink-300 rounded-full hover:bg-pink-400 transition"
      >
        会議に参加する
      </button>
    </div>
  );
  }