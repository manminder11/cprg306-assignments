
"use client";
import { useState } from "react";
import { useEffect } from "react";
import MealIdeas from "./meal-ideas.js";
import ItemList from "./item-list.js";
import getItems from "./shopping-list-service.js";
import additem from "./shopping-list-service.js";
import NewItem from "./new-item.js";


export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  useEffect(() => { 
    async function fetchItems() {
      const items = await getItems();
      setItems(items);
    }
    fetchItems();
  }, []);



  async function handleAddItem(item) {
    const userId = user.uid;
    const newItemId = await additem(item, userId);
    const newItem = { ...item, id: newItemId };
    setItems([...items, newItem]);
  }

  function handleItemSelect(item) {
    const cleanedItemName = item.name
      .split(",")[0]
      .replace(/[\u{1F600}-\u{1F6FF}]/gu, "")
      .trim();
    setSelectedItemName(cleanedItemName);
  }

  return (
    <main className="p-4" style={{ backgroundColor: "#333", color: "#f0f0f0", margin: "20px", padding: "20px", height: "100vh" }}>
      <h1 className="font-extrabold text-4xl p-3 pl-5 text-yellow-300">
        Shopping List
      </h1>
      <div className="flex flex-col md:flex-row" style={{ margin: "10px", padding: "10px", height: "calc(100vh - 120px)" }}>
        <div className="flex-1 p-2 overflow-auto" style={{ margin: "10px", padding: "10px" }}>
          <header>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </header>
        </div>
        <div className="flex-1 p-2 overflow-auto" style={{ margin: "10px", padding: "10px" }}>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
