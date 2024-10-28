export default function Item(props) {
  const { name, quantity, category, onSelect } = props; // Updated to `onSelect`

  return (
    <main>
      <ul>
        <li>
          <section onClick={onSelect}>
            {" "}
            {/* Use `onSelect` as the handler */}
            <h1 className="font-extrabold text-2xl pb-3">{name}</h1>
            <p>
              Buy {quantity} in {category}
            </p>
          </section>
        </li>
      </ul>
    </main>
  );
}
