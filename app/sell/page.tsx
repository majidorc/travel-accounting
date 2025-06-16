export default function SellPage() {
  return (
    <div className="max-w-xl mx-auto mt-10 bg-white rounded-2xl shadow-lg p-8 border border-tropicalBlue/20">
      <h2 className="text-2xl font-bold text-tropicalBlue mb-6">Record a Sale</h2>
      <form className="flex flex-col gap-6">
        <label className="flex flex-col gap-2">
          <span className="font-semibold text-tropicalBlue">Product</span>
          <input type="text" className="border border-tropicalBlue/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tropicalBlue/40" placeholder="Product name or code" required />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-semibold text-tropicalBlue">Date</span>
          <input type="date" className="border border-tropicalBlue/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tropicalBlue/40" required />
        </label>
        <div className="flex flex-col sm:flex-row gap-4">
          <label className="flex flex-col gap-2 flex-1">
            <span className="font-semibold text-tropicalBlue">Adult Quantity</span>
            <input type="number" min="0" className="border border-tropicalBlue/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tropicalBlue/40" required />
          </label>
          <label className="flex flex-col gap-2 flex-1">
            <span className="font-semibold text-tropicalBlue">Child Quantity</span>
            <input type="number" min="0" className="border border-tropicalBlue/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tropicalBlue/40" required />
          </label>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <label className="flex flex-col gap-2 flex-1">
            <span className="font-semibold text-tropicalBlue">Adult Price</span>
            <input type="number" min="0" step="0.01" className="border border-tropicalBlue/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tropicalBlue/40" required />
          </label>
          <label className="flex flex-col gap-2 flex-1">
            <span className="font-semibold text-tropicalBlue">Child Price</span>
            <input type="number" min="0" step="0.01" className="border border-tropicalBlue/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tropicalBlue/40" required />
          </label>
        </div>
        <button type="submit" className="mt-4 bg-tropicalBlue hover:bg-deepBlue text-white font-bold py-2 px-6 rounded-lg shadow transition-colors">Submit</button>
      </form>
    </div>
  );
} 