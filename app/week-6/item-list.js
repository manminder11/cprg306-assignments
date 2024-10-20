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
    <main style={{ backgroundColor: "black", padding: "20px" }}>
      <section style={{ marginBottom: "20px" }}>
        <h2 className="font-extrabold text-2xl ">Sort by:</h2>
        <button
          className="font-extrabold bg-blue-500 text-white hover:cursor-pointer py-2 px-4 rounded-md mr-2 hover:bg-blue-700"
          onClick={() => setSortBy("name")}
          style={{ marginRight: "10px" }}
        >
          Name
        </button>
        <button
          className="font-extrabold bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </section>
      <ul style={{ padding: "0", listStyleType: "none" }}>
        {sortedItems.map((item) => (
          <li key={item.id} style={{ marginBottom: "10px" }}>
            <div style={{ border: "2px solid white", padding: "10px" }}>
              <Item {...item} />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
