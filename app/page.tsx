export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full">
      <div className="w-full max-w-4xl mt-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome to <span className='text-gray-700 dark:text-gray-300'>Accounting</span></h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Your travel agency&apos;s accounting dashboard</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center border-t-4 border-gray-200 dark:border-gray-700">
            <span className="text-2xl font-semibold text-gray-900 dark:text-white">$0</span>
            <span className="text-gray-500 dark:text-gray-400">Total Sales</span>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center border-t-4 border-gray-200 dark:border-gray-700">
            <span className="text-2xl font-semibold text-gray-900 dark:text-white">$0</span>
            <span className="text-gray-500 dark:text-gray-400">Total Expenses</span>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center border-t-4 border-gray-200 dark:border-gray-700">
            <span className="text-2xl font-semibold text-gray-900 dark:text-white">$0</span>
            <span className="text-gray-500 dark:text-gray-400">Profit</span>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center min-h-[300px] border border-gray-200 dark:border-gray-700">
          <span className="text-lg text-gray-400">[Sales & Expenses Graph Coming Soon]</span>
        </div>
      </div>
    </div>
  );
}
