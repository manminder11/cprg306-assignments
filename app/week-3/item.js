export default function Item(props) {
  return (
    <main>
      <ul>
        <li>
          <section>
            <h2 className="font-bold">{props.name}</h2>
            <p>
              Buy {props.quantity} in {props.category}
            </p>
          </section>
        </li>
      </ul>
    </main>
  );
}
