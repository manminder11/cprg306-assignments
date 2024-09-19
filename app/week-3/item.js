export default function Item(props) {
  return (
    <main>
      <ul>
        <li>
          {props.name} - {props.quantity} - {props.category}
        </li>
      </ul>
    </main>
  );
}
