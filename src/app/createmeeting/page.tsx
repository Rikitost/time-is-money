'use client';
import React, { useState } from "react";

export default function CreateMeeting() {
  const [meetingTime, setMeetingTime] = useState(0); // 会議時間
  const [topic, setTopic] = useState(""); // 会議の議題
  const [privateMemo, setPrivateMemo] = useState(""); // プライベートメモ
  const [sharedMemo, setSharedMemo] = useState(""); // 共有メモ
  // const [candidates, setCandidates] = useState([]); // 候補リスト
  const [newCandidate, setNewCandidate] = useState(""); // 新しい候補入力

  const addCandidate = () => {
    if (newCandidate.trim()) {
      // setCandidates([...candidates, newCandidate]);
      setNewCandidate("");
    }
  };

  const handleStartMeeting = () => {
    console.log("会議を開始します");
    console.log("会議時間:", meetingTime);
    console.log("議題:", topic);
    console.log("プライベートメモ:", privateMemo);
    console.log("共有メモ:", sharedMemo);
    // console.log("候補リスト:", candidates);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-4">会議作成</h1>

      <div className="mb-4">
        <label className="block font-medium mb-2">会議時間 (分)</label>
        <input
          type="number"
          value={meetingTime}
          onChange={(e) => setMeetingTime(Number(e.target.value))}
          className="w-full p-2 border rounded"
          placeholder="時間を入力してください"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-2">今回の議題</label>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="議題を入力してください"
        />
      </div>

      <div className="flex space-x-4 mb-4">
        <div className="w-1/2">
          <h2 className="font-medium mb-2">プライベートメモ</h2>
          <textarea
            value={privateMemo}
            onChange={(e) => setPrivateMemo(e.target.value)}
            className="w-full p-2 border rounded h-40"
            placeholder="プライベートメモを入力"
          />
        </div>

        <div className="w-1/2">
          <h2 className="font-medium mb-2">共有メモ</h2>
          <textarea
            value={sharedMemo}
            onChange={(e) => setSharedMemo(e.target.value)}
            className="w-full p-2 border rounded h-40"
            placeholder="共有メモを入力"
          />
        </div>
      </div>

      <div className="mb-4">
        <h2 className="font-medium mb-2">候補</h2>
        <div className="flex items-center mb-2">
          <input
            type="text"
            value={newCandidate}
            onChange={(e) => setNewCandidate(e.target.value)}
            className="flex-1 p-2 border rounded"
            placeholder="候補を入力"
          />
          <button
            onClick={addCandidate}
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            追加
          </button>
        </div>

        {/* <ul className="list-disc pl-5">
          {candidates.map((candidate, index) => (
            <li key={index} className="mb-1">
              {candidate}
            </li>
          ))}
        </ul> */}
      </div>

      <button
        onClick={handleStartMeeting}
        className="w-full bg-green-500 text-white py-2 rounded text-lg font-bold"
      >
        会議を開始する
      </button>
    </div>
  );
}
