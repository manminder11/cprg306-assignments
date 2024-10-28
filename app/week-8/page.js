"use client";
import { useState } from "react";
import MealIdeas from "./meal-ideas.js";
import ItemList from "./item-list.js";
import itemsData from "./items.json";
import NewItem from "./new-item.js";

export default function Page() {  
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleItemSelect(item) {
    const cleanedItemName = item.name.trim();
    setSelectedItemName(cleanedItemName);
  }

  return (
    <main className="p-4">
      <h1 className="font-extrabold text-4xl p-3 pl-5 text-yellow-300">
        Shopping List
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-2">
          <header>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </header>
        </div>
        <div className="flex-1 p-2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
