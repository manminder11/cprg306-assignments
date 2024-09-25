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
    <div>
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
