export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-tropicalBlue via-teal to-lushGreen p-6">
      <div className="w-full max-w-4xl mt-8">
        <h1 className="text-3xl font-bold text-white mb-2">Welcome to Accounting</h1>
        <p className="text-lg text-white mb-8">Your travel agency&apos;s accounting dashboard</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-2xl font-semibold text-tropicalBlue">$0</span>
            <span className="text-gray-500">Total Sales</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-2xl font-semibold text-lushGreen">$0</span>
            <span className="text-gray-500">Total Expenses</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-2xl font-semibold text-brightYellow">$0</span>
            <span className="text-gray-500">Profit</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center justify-center min-h-[300px]">
          <span className="text-lg text-gray-400">[Sales & Expenses Graph Coming Soon]</span>
        </div>
      </div>
    </div>
  );
}
