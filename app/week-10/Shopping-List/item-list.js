"use client";
import React, { useState, useEffect } from 'react';
import { useUserAuth } from '../_utils/auth-context'; // Ensure the correct path to your auth context
import { getUserItems, addItem } from '../_utils/shopping-list-service'; // Ensure the correct path to your service
import Item from "./item.js";

export default function ItemList() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', quantity: 1, category: '' });
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    if (user) {
      getUserItems(user.uid).then(setItems);
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleAddItem = async (e) => {
    e.preventDefault();
    if (user) {
      const addedItem = await addItem(user.uid, newItem);
      setItems((prevItems) => [...prevItems, addedItem]);
      setNewItem({ name: '', quantity: 1, category: '' });
    }
    
  };

  if (!user) {
    return (
      <main className="bg-gray-900 p-5 flex flex-col items-center min-h-screen">
        <h2 className="font-extrabold text-2xl text-white mb-4 text-center">
          Enter the items to add in your list.
        </h2>
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
        <h2 className="font-extrabold text-2xl text-white mb-4 text-center">
          Sort by:
        </h2>
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

      <section className="mb-5 w-full max-w-2xl">
        <form onSubmit={handleAddItem} className="flex flex-col items-center">
          <input
            type="text"
            name="name"
            value={newItem.name}
            onChange={handleInputChange}
            placeholder="Item Name"
            className="mb-2 p-2 rounded-md"
            required
          />
          <input
            type="number"
            name="quantity"
            value={newItem.quantity}
            onChange={handleInputChange}
            placeholder="Quantity"
            className="mb-2 p-2 rounded-md"
            required
          />
          <input
            type="text"
            name="category"
            value={newItem.category}
            onChange={handleInputChange}
            placeholder="Category"
            className="mb-2 p-2 rounded-md"
            required
          />
          <button
            type="submit"
            className="font-extrabold bg-green-500 text-white hover:cursor-pointer py-2 px-4 rounded-md hover:bg-green-700 transition-all duration-300"
          >
            Add Item
          </button>
        </form>
      </section>

      <section className="w-full max-w-2xl">
        <h2 className="font-extrabold text-2xl text-white mb-4 text-center">
          Items
        </h2>
        <ul className="space-y-4">
          {sortedItems.map((item) => (
            <li key={item.id} className="bg-gray-800 text-white rounded-lg p-4">
              <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-2">
                {item.name}
              </h1>
              <p className="text-sm sm:text-lg lg:text-xl">
                Buy <span className="font-semibold">{item.quantity}</span> in{" "}
                <span className="font-semibold">{item.category}</span>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
