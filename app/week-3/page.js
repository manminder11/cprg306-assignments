import ItemList from "./item-list.js";
export default function Page() {
  return (
    <main>
      <h1 className="font-extrabold text-3xl text-yellow-300 ">Shopping List</h1>
      <header>
        <ItemList />
      </header>
    </main>
  );
}
