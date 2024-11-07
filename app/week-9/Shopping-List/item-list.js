"use client";
import { useState } from "react";
import Item from "./item.js";

export default function ItemList({ items, onItemSelect, isAuthenticated }) {
  const [sortBy, setSortBy] = useState("name");

  if (!isAuthenticated) {
    return (
      <main className="bg-gray-900 p-5 flex flex-col items-center min-h-screen">
        <h2 className="font-extrabold text-2xl text-white mb-4 text-center">Please sign in to view your shopping list.</h2>
      </main>
    );
  }

  let sortedItems = [...items];
  if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }
  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <main className="bg-gray-900 p-5 flex flex-col items-center min-h-screen">
      <section className="mb-5 w-full max-w-2xl">
        <h2 className="font-extrabold text-2xl text-white mb-4 text-center">Sort by:</h2>
        <div className="flex justify-center">
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
        </div>
      </section>
      <ul className="p-0 m-0 list-none w-full max-w-2xl flex flex-col items-center">
        {sortedItems.map((item) => (
          <li
            key={item.id}
            className="mb-4 w-full transition-all duration-300 ease-in-out"
          >
            <div
              className={`border-2 border-white p-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105`}
              style={{ backgroundColor: item.color }}
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
