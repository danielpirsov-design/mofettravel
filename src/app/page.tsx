import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-400 to-cyan-500">
      <div className="bg-white rounded-2xl shadow-xl p-10 text-center max-w-md">
        <h1 className="text-4xl font-bold text-sky-600 mb-4">
          Smart Search
        </h1>

        <p className="text-gray-600 mb-8">
          Find places, experiences and services — all in one search.
        </p>

        <Link
          href="/search"
          className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-xl transition"
        >
          Start Searching
        </Link>
      </div>
    </main>
  );
}

