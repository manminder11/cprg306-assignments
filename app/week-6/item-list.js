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
        <h2 style={{ fontSize: "1.125rem", fontWeight: "bold" }}>Sort by:</h2>
        <button
          style={{
            fontWeight: "800",
            backgroundColor: "#3b82f6",
            color: "white",
            hover: "cursor",
            
            padding: "0.5rem 1rem",
            borderRadius: "0.375rem",
            marginRight: "0.5rem",
          }}
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          style={{
            fontWeight: "800",
            backgroundColor: "#3b82f6",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "0.375rem",
          }}
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
