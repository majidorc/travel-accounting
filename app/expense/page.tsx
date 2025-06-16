export default function ExpensePage() {
  return (
    <div className="max-w-xl mx-auto mt-10 bg-white rounded-lg shadow p-8">
      <h2 className="text-2xl font-bold text-lushGreen mb-6">Record an Expense</h2>
      <form className="flex flex-col gap-4">
        <label className="flex flex-col gap-1">
          <span className="font-semibold">Date</span>
          <input type="date" className="border rounded px-3 py-2" required />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-semibold">Category</span>
          <input type="text" className="border rounded px-3 py-2" placeholder="Expense category" required />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-semibold">Amount</span>
          <input type="number" min="0" step="0.01" className="border rounded px-3 py-2" required />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-semibold">Description</span>
          <textarea className="border rounded px-3 py-2" placeholder="Expense details" rows={2} />
        </label>
        <button type="submit" className="mt-4 bg-lushGreen hover:bg-naturalGreen text-white font-bold py-2 px-6 rounded transition-colors">Submit</button>
      </form>
    </div>
  );
} 