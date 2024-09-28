"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1 < 20 ? quantity + 1 : 20);
  };

  const decrement = () => {
    setQuantity(quantity - 1 > 1 ? quantity - 1 : 1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-stone-900">
      <div className="bg-violet-500 shadow-lg p-8 text-center border-custom">
        <h1 className="text-3xl font-extrabold text-center text-black mb-2 ">
          COUNTER PROGRAM FOR SHOPPING LIST
        </h1>
        <h1 className="text-2xl font-bold text-black mb-4">
          Quantity: {quantity}
        </h1>

        <button
          className="font-large bg-gray-700 hover:bg-red-700 text-white font-bold p-2 px-4 rounded mr-2"
          disabled={increment > 20}
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="font-large font-large bg-yellow-800 hover:bg-cyan-700 text-white font-bold p-2 px-4  mt-12rounded"
          disabled={decrement <= 1}
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
