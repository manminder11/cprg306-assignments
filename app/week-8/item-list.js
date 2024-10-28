"use client";
import { useState } from "react";
import Item from "./item.js";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [...items];
  if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }
  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <main className="bg-black p-5 flex flex-col items-center">
      <section className="mb-5">
        <h2 className="font-extrabold text-2xl text-white mb-4">Sort by:</h2>
        <button
          className="font-extrabold bg-blue-500 text-white hover:cursor-pointer py-2 px-4 rounded-md mr-2 hover:bg-blue-700 transition-all duration-300"
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className="font-extrabold bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-300 ml-2"
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </section>
      <ul className="p-0 m-0 list-none w-full flex flex-col items-center">
        {sortedItems.map((item) => (
          <li
            key={item.id}
            className="mb-2 w-4/5 transition-all duration-300 ease-in-out"
          >
            <div
              className={`border-2 border-white p-2 rounded-lg shadow-lg transition-transform duration-300 ease-in-out`}
              style={{ backgroundColor: item.color }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
              onClick={() => onItemSelect(item)}
            >
              <Item {...item} onSelect={() => onItemSelect(item)} />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
