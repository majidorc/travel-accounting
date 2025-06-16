export default function SellPage() {
  return (
    <div className="max-w-xl mx-auto mt-10 bg-white rounded-lg shadow p-8">
      <h2 className="text-2xl font-bold text-tropicalBlue mb-6">Record a Sale</h2>
      <form className="flex flex-col gap-4">
        <label className="flex flex-col gap-1">
          <span className="font-semibold">Product</span>
          <input type="text" className="border rounded px-3 py-2" placeholder="Product name or code" required />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-semibold">Date</span>
          <input type="date" className="border rounded px-3 py-2" required />
        </label>
        <div className="flex gap-4">
          <label className="flex flex-col gap-1 flex-1">
            <span className="font-semibold">Adult Quantity</span>
            <input type="number" min="0" className="border rounded px-3 py-2" required />
          </label>
          <label className="flex flex-col gap-1 flex-1">
            <span className="font-semibold">Child Quantity</span>
            <input type="number" min="0" className="border rounded px-3 py-2" required />
          </label>
        </div>
        <div className="flex gap-4">
          <label className="flex flex-col gap-1 flex-1">
            <span className="font-semibold">Adult Price</span>
            <input type="number" min="0" step="0.01" className="border rounded px-3 py-2" required />
          </label>
          <label className="flex flex-col gap-1 flex-1">
            <span className="font-semibold">Child Price</span>
            <input type="number" min="0" step="0.01" className="border rounded px-3 py-2" required />
          </label>
        </div>
        <button type="submit" className="mt-4 bg-tropicalBlue hover:bg-deepBlue text-white font-bold py-2 px-6 rounded transition-colors">Submit</button>
      </form>
    </div>
  );
} 