import ItemList from "./item-list.js";
export default function Page() {
  return (
    <main>
      <h1 className="font-extrabold text-4xl p-3 pl-5 text-yellow-300 ">
        Shopping List
      </h1>
      <header>
        <ItemList />
      </header>
    </main>
  );
}
