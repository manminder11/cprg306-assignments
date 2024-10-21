import useState from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsdata from "./items.json";
export default function Page() {


  const [items, setItems] = useState(itemsdata);

  return (
    <main>
      <h1 className="font-extrabold text-4xl p-3 pl-5 text-yellow-300 ">
        Shopping List
      </h1>
      <header>
        <ItemList />
        <NewItem />

      </header>
    </main>
  );
}
