"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-400 to-cyan-300">
      <div className="bg-white/90 backdrop-blur rounded-2xl p-10 shadow-xl text-center max-w-md w-full">
        <h1 className="text-4xl font-bold text-sky-600 mb-4">
          MOFET Travel
        </h1>

        <p className="text-gray-600 mb-8">
          Find places, experiences, and everything in between.
        </p>

        <Link
          href="/search"
          className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-xl transition"
        >
          Start Searching
        </Link>
      </div>
    </main>
  );
}
