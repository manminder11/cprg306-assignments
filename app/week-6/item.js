export default function Item(props) {
  return (
    <main className="bg-gray-900 min-h-screen p-6">
      {/* Sorting Buttons */}
      <div className="flex justify-start mb-6">
        <span className="mr-4 text-white">Sort by:</span>
        <button className="bg-orange-600 text-white font-bold py-2 px-4 rounded-md mr-4">
          Name
        </button>
        <button className="bg-orange-600 text-white font-bold py-2 px-4 rounded-md mr-4">
          Category
        </button>
        <button className="bg-orange-600 text-white font-bold py-2 px-4 rounded-md">
          Grouped Category
        </button>
      </div>

      {/* Item List */}
      <ul className="space-y-4">
        <li>
          <section className="bg-gray-800 text-white rounded-lg p-4">
            <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-2">
              {props.name}
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl">
              Buy <span className="font-semibold">{props.quantity}</span> in{" "}
              <span className="font-semibold">{props.category}</span>
            </p>
          </section>
        </li>
      </ul>
    </main>
  );
}
