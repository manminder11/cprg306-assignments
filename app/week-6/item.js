export default function Item(props) {
  return (
    <main>
      <ul>
        <li>
          <section>
            <h1 className="font-extrabold text-2xl pb-3" >{props.name}</h1>
            <p>
              Buy {props.quantity} in {props.category}

            </p>
          </section>
        </li>
      </ul>
    </main>
  );
}
