export default function Item(props) {
  const { name, quantity, category, onSelect } = props; 

  return (
    <main>
      <ul>
        <li>
          <section onClick={onSelect}>
            {" "}
         
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
