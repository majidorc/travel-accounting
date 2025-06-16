export default function ExpensePage() {
  return (
    <div className="max-w-xl mx-auto mt-10 bg-white rounded-2xl shadow-lg p-8 border border-lushGreen/20">
      <h2 className="text-2xl font-bold text-lushGreen mb-6">Record an Expense</h2>
      <form className="flex flex-col gap-6">
        <label className="flex flex-col gap-2">
          <span className="font-semibold text-lushGreen">Date</span>
          <input type="date" className="border border-lushGreen/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lushGreen/40" required />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-semibold text-lushGreen">Category</span>
          <input type="text" className="border border-lushGreen/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lushGreen/40" placeholder="Expense category" required />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-semibold text-lushGreen">Amount</span>
          <input type="number" min="0" step="0.01" className="border border-lushGreen/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lushGreen/40" required />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-semibold text-lushGreen">Description</span>
          <textarea className="border border-lushGreen/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lushGreen/40" placeholder="Expense details" rows={2} />
        </label>
        <button type="submit" className="mt-4 bg-lushGreen hover:bg-naturalGreen text-white font-bold py-2 px-6 rounded-lg shadow transition-colors">Submit</button>
      </form>
    </div>
  );
} 