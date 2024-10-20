"use client";
import { useState } from "react";
import items from "./items.json";
import Item from "./item.js";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [...items];
  if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }
  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <main>
      <section>
        <h2 className="font-extrabold text-2xl ">Sort by:</h2>
        <button
          className="font-extrabold bg-blue-500 text-white hover:cursor-pointer py-2 px-4 rounded-md mr-2"
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className="font-extrabold bg-blue-500 text-white py-2 px-4 rounded-md"
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </section>
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>
            <Item {...item} />
          </li>
        ))}
      </ul>
    </main>
  );
}
