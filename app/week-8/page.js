"use client";
import { useState } from "react";
import ItemList from "./item-list.js";
import itemsData from "./items.json";
import NewItem from "./new-item.js";
export default function Page() {  
  const [items, setItems] = useState(itemsData);


  function handleAddItem(item) {
    setItems([...items, item]);
  }


  return (
    <main>
      <h1 className="font-extrabold text-4xl p-3 pl-5 text-yellow-300 ">
        Shopping List
      </h1>
      <header>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </header>
    </main>
  );
}
