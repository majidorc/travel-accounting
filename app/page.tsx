export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full">
      <div className="w-full max-w-4xl mt-8">
        <h1 className="text-3xl font-bold text-tropicalBlue mb-2">Welcome to <span className='text-deepBlue'>Accounting</span></h1>
        <p className="text-lg text-gray-700 mb-8">Your travel agency&apos;s accounting dashboard</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border-t-4 border-tropicalBlue">
            <span className="text-2xl font-semibold text-tropicalBlue">$0</span>
            <span className="text-gray-500">Total Sales</span>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border-t-4 border-lushGreen">
            <span className="text-2xl font-semibold text-lushGreen">$0</span>
            <span className="text-gray-500">Total Expenses</span>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border-t-4 border-brightYellow">
            <span className="text-2xl font-semibold text-brightYellow">$0</span>
            <span className="text-gray-500">Profit</span>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center min-h-[300px] border border-tropicalBlue/20">
          <span className="text-lg text-gray-400">[Sales & Expenses Graph Coming Soon]</span>
        </div>
      </div>
    </div>
  );
}
