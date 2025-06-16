export default function ExpensePage() {
  return (
    <div className="max-w-xl mx-auto mt-10 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Record an Expense</h2>
      <form className="flex flex-col gap-6">
        <label className="flex flex-col gap-2">
          <span className="font-semibold text-gray-700 dark:text-gray-200">Date</span>
          <input type="date" className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-semibold text-gray-700 dark:text-gray-200">Category</span>
          <input type="text" className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Expense category" required />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-semibold text-gray-700 dark:text-gray-200">Amount</span>
          <input type="number" min="0" step="0.01" className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-semibold text-gray-700 dark:text-gray-200">Description</span>
          <textarea className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Expense details" rows={2} />
        </label>
        <button type="submit" className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow transition-colors">Submit</button>
      </form>
    </div>
  );
} 