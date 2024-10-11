export default function Item(props) {
  return (
    <main>
      <ul>
        <li>
          <section>
            <h1 className="font-extrabold text-xl sm:text-2xl lg:text-3xl pb-3 p-2 sm:p-4 m-2 sm:m-4 bg-black max-w-full sm:max-w-sm rounded-xl sm:rounded-3xl">
              {props.name}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl">
              Buy {props.quantity} in {props.category}
            </p>
          </section>
        </li>
      </ul>
    </main>
  );
}
