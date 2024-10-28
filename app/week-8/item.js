export default function Item(props) {
  const { name, quantity, category, onselect } = props;

  
  return (
    <main>
      <ul>
        <li>
          <section onClick={onselect}>
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
