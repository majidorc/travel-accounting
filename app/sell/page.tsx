export default function SellPage() {
  return (
    <div className="max-w-xl mx-auto mt-10 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Record a Sale</h2>
      <form className="flex flex-col gap-6">
        <label className="flex flex-col gap-2">
          <span className="font-semibold text-gray-700 dark:text-gray-200">Product</span>
          <input type="text" className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Product name or code" required />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-semibold text-gray-700 dark:text-gray-200">Date</span>
          <input type="date" className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        </label>
        <div className="flex flex-col sm:flex-row gap-4">
          <label className="flex flex-col gap-2 flex-1">
            <span className="font-semibold text-gray-700 dark:text-gray-200">Adult Quantity</span>
            <input type="number" min="0" className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          </label>
          <label className="flex flex-col gap-2 flex-1">
            <span className="font-semibold text-gray-700 dark:text-gray-200">Child Quantity</span>
            <input type="number" min="0" className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          </label>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <label className="flex flex-col gap-2 flex-1">
            <span className="font-semibold text-gray-700 dark:text-gray-200">Adult Price</span>
            <input type="number" min="0" step="0.01" className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          </label>
          <label className="flex flex-col gap-2 flex-1">
            <span className="font-semibold text-gray-700 dark:text-gray-200">Child Price</span>
            <input type="number" min="0" step="0.01" className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          </label>
        </div>
        <button type="submit" className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow transition-colors">Submit</button>
      </form>
    </div>
  );
} 