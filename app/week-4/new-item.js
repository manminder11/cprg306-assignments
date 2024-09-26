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
    <div className="bg-i text-white pt-36 rounded-lg max-w-md mx-auto text-center">
      <h1 className="font-extrabold to-violet-900 ">COUNTER PROGRAM FOR SHOPPING LIST</h1>
      <h1>Quantity: {quantity}</h1>

      <button disabled={increment > 20} onClick={increment}>
        Increment
      </button>
      <button disabled={decrement <= 1} onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}
