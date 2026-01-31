"use client";

import { useState } from "react";

export default function SearchPage() {
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setShowResults(false);

    setTimeout(() => {
      setLoading(false);
      setShowResults(true);
    }, 4000);
  };

  return (
    <main className="min-h-screen bg-sky-50 p-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold text-sky-700 mb-6">
          Smart Search
        </h1>

        {/* טופס */}
        <div className="bg-white rounded-2xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm mb-1">Location</label>
            <input
              className="w-full border rounded-xl px-4 py-2"
              placeholder="Where are you going?"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Category</label>
            <select className="w-full border rounded-xl px-4 py-2">
              <option>All</option>
              <option>Hotels</option>
              <option>Attractions</option>
              <option>Restaurants</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Date</label>
            <input
              type="date"
              className="w-full border rounded-xl px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">People</label>
            <input
              type="number"
              defaultValue={2}
              min={1}
              className="w-full border rounded-xl px-4 py-2"
            />
          </div>
        </div>

        <div className="mt-6 text-right">
          <button
            onClick={handleSearch}
            className="bg-sky-500 hover:bg-sky-600 text-white px-10 py-3 rounded-xl"
          >
            Search
          </button>
        </div>

        {/* 🎥 LOADING */}
        {loading && (
          <div className="mt-10 flex flex-col items-center">
            <video
              src="/loading.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-64 rounded-xl"
            />
            <p className="mt-4 text-sky-600 font-medium">
              Searching best results...
            </p>
          </div>
        )}

        {/* 📦 RESULTS */}
        {showResults && (
          <div className="mt-10 bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold text-sky-700">
              Results will appear here 🚀
            </h2>
          </div>
        )}

      </div>
    </main>
  );
}
