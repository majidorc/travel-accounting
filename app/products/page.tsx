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
    <div className="max-w-6xl mx-auto mt-10 bg-white rounded-lg shadow p-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-tropicalBlue">Product List</h2>
        <div className="flex gap-2">
          <button className="bg-brightYellow hover:bg-goldenYellow text-deepBlue font-bold py-2 px-4 rounded transition-colors">Import</button>
          <button className="bg-tropicalBlue hover:bg-deepBlue text-white font-bold py-2 px-4 rounded transition-colors">Export</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-lg">
          <thead className="bg-tropicalBlue text-white">
            <tr>
              {columns.map(col => (
                <th key={col} className="px-4 py-2 text-left font-semibold whitespace-nowrap">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sampleProducts.map((row, idx) => (
              <tr key={idx} className="even:bg-cream odd:bg-beige">
                {columns.map(col => (
                  <td key={col} className="px-4 py-2 whitespace-nowrap">{row[col]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 