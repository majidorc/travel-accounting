const columns = [
  'SKU', 'ID', 'Company', 'Tour', 'Adult Net', 'Child Net', 'Remark', 'Adult Sell', 'Child Sell'
];

const sampleProducts: Record<string, string>[] = [
  {
    SKU: 'T001',
    ID: '1',
    Company: 'Blue Ocean',
    Tour: 'Island Adventure',
    'Adult Net': '100',
    'Child Net': '80',
    Remark: 'Popular',
    'Adult Sell': '120',
    'Child Sell': '90',
  },
];

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto mt-10 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Product List</h2>
        <div className="flex gap-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow transition-colors">Import</button>
          <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-6 rounded-lg shadow transition-colors">Export</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-lg text-sm">
          <thead className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white sticky top-[120px] z-10">
            <tr>
              {columns.map(col => (
                <th key={col} className="px-4 py-3 text-left font-semibold whitespace-nowrap border-b border-gray-200 dark:border-gray-700">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sampleProducts.map((row, idx) => (
              <tr key={idx} className="even:bg-gray-50 odd:bg-white dark:even:bg-gray-800 dark:odd:bg-gray-900 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                {columns.map(col => (
                  <td key={col} className="px-4 py-3 whitespace-nowrap border-b border-gray-100 dark:border-gray-800">{row[col]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 