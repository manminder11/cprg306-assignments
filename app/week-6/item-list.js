"use client";
import { useState } from "react";
import Item from "./item.js";
import items from "./items.json";
export default function ItemList() {
  const [sortby, setSortby] = useState("name");

  if (sortby === "name") {
    items.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortby === "category") {
    items.sort((a, b) => a.category.localeCompare(b.category));
  }

  const itemsList = items.map((item) => (
    <Item
      key={item.id}
      name={item.name}
      category={item.category}
      quantity={item.quantity}
    />  


  ));

  return (
    <main>
      <h1 className="text-3xl font-bold">Items</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setSortby("name")}
      >
        Sort by Name
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setSortby("category")}
      >
        Sort by Category
      </button>
      <ul>{itemsList}</ul>
    </main>
  );
}
