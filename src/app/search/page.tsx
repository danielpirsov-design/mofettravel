export default function SearchPage() {
  return (
    <main className="min-h-screen bg-sky-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-sky-700 mb-6">
          Search Anything
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Location
            </label>
            <input
              type="text"
              placeholder="Where are you going?"
              className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-sky-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Category
            </label>
            <select className="w-full border rounded-xl px-4 py-2">
              <option>All</option>
              <option>Hotels</option>
              <option>Restaurants</option>
              <option>Attractions</option>
              <option>Events</option>
              <option>Experiences</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Dates
            </label>
            <input
              type="date"
              className="w-full border rounded-xl px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              People
            </label>
            <input
              type="number"
              min={1}
              defaultValue={2}
              className="w-full border rounded-xl px-4 py-2"
            />
          </div>
        </div>

        <div className="mt-6 text-right">
          <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-10 py-3 rounded-xl">
            Search
          </button>
        </div>
      </div>
    </main>
  );
}
