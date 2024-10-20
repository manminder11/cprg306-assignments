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
        <h2 className="font-extrabold text-2xl text-white">Sort by:</h2>
        <button
          className="font-extrabold bg-blue-500 text-white hover:cursor-pointer py-2 px-4 rounded-md mr-2 hover:bg-blue-700 transition-all duration-300"
          onClick={() => setSortBy("name")}
          style={{ marginRight: "10px" }}
        >
          Name
        </button>
        <button
          className="font-extrabold bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-300"
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </section>
      <ul style={{ padding: "0", listStyleType: "none" }}>
        {sortedItems.map((item) => (
          <li key={item.id} style={{ marginBottom: "10px", transition: "all 0.3s ease-in-out" }}>
            <div style={{ 
              border: "2px solid white", 
              padding: "10px", 
              backgroundColor: item.color,
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(255, 255, 255, 0.2)",
              transition: "transform 0.3s ease-in-out, flex 0.3s ease-in-out"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.flex = "1.1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.flex = "1";
            }}
            >
              <Item {...item} />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
