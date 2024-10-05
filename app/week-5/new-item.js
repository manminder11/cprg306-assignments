"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const increment = () => {
    setQuantity(quantity + 1 < 20 ? quantity + 1 : 20);
  };

  const decrement = () => {
    setQuantity(quantity - 1 > 1 ? quantity - 1 : 1);
  };

  const reset = () => {
    setQuantity(1);
    setCategory("produce");
    setName("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name: name,
      category: category,
      quantity: quantity,
    };
    console.log({ item });
    window.alert(
      `Item: ${item.name} \nCategory: ${item.category} \nQuantity: ${item.quantity}`
    );
    setQuantity(1);
    setCategory("produce");
    setName("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-stone-900">
      <div className="bg-yellow-300 shadow-lg p-8 text-center ">
        <h1 className="text-3xl font-extrabold text-center text-black mb-2 ">
          COUNTER PROGRAM FOR SHOPPING LIST
        </h1>
        <h1 className="text-2xl font-bold text-black mb-4">
          Quantity: {quantity}
        </h1>

        <button
          className="font-large bg-gray-700 hover:bg-red-700 text-white font-bold p-2 px-4 rounded mr-2"
          disabled={quantity >= 20}
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="font-large font-large bg-yellow-800 hover:bg-cyan-700 text-white font-bold p-2 px-4  mt-12rounded"
          disabled={quantity <= 1}
          onClick={decrement}
        >
          Decrement
        </button>

        {
          <button
            className="font-large bg-gray-700 hover:bg-green-700 text-white font-bold 
          ml-2 px-4 p-2 rounded mr-2 "
            onClick={reset}
          >
            Reset
          </button>
        }

        <form className="flex flex-col items-center mt-4 space-y-4">
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Item Name"
            className="p-2 mt-4 text-black"
          />

          <select
            className="text-black"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="household">household</option>
            <option value="dry goods">dry goods</option>
            <option value="canned goods">canned goods</option>
          </select>

          <div>
            <button
              type="submit"
              className="font-large bg-blue-700 hover:bg-blue-900 text-white font-bold p-2 px-4 rounded mt-4"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
