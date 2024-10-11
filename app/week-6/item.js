export default function Item(props) {
  return (
    <main className="bg-amber-500">
      <ul>
        <li>
          <section className="bg-stone-950  text-amber-600 rounded-lg">
            <h1 className="font-extrabold text-2xl hover:text-lime-400 transition-colors">{props.name}</h1>
            <p className="p-2 pl-4  bg-black max-w-sm rounded-3xl">
              Buy {props.quantity} in {props.category}
            </p>
          </section>
        </li>
      </ul>
    </main>
  );
}
