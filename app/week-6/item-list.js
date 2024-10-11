import Item from "./item";
export default function ItemList() {
  const item1 = {
    name: "milk, 4 L 🥛",
    quantity: 1,
    category: "dairy",
  };

  const item2 = {
    name: "bread 🍞",
    quantity: 2,
    category: "bakery",
  };

  const item3 = {
    name: "eggs, dozen 🥚",
    quantity: 2,
    category: "dairy",
  };

  const item4 = {
    name: "bananas 🍌",
    quantity: 6,
    category: "produce",
  };

  const item5 = {
    name: "broccoli 🥦",
    quantity: 3,
    category: "produce",
  };

  const item6 = {
    name: "chicken breasts, 1 kg 🍗",
    quantity: 1,
    category: "meat",
  };

  const item7 = {
    name: "pasta sauce 🍝",
    quantity: 3,
    category: "canned goods",
  };

  const item8 = {
    name: "spaghetti, 454 g 🍝",
    quantity: 2,
    category: "dry goods",
  };

  const item9 = {
    name: "toilet paper, 12 pack 🧻",
    quantity: 1,
    category: "household",
  };

  const item10 = {
    name: "paper towels, 6 pack",
    quantity: 1,
    category: "household",
  };

  const item11 = {
    name: "dish soap 🍽️",
    quantity: 1,
    category: "household",
  };

  const item12 = {
    name: "hand soap 🧼",
    quantity: 4,
    category: "household",
  };

  const item13 = {
    name: "frozen pizza 🍕",
    quantity: 10,
    category: "frozen foods",
  };

  const item14 = {
    name: "coca-cola, 2 L 🥤",
    quantity: 1,
    category: "beverages",
  };

  const item15 = {
    name: "chips 🍟",
    quantity: 1,
    category: "snacks",
  };
  return (
    <main>
      <div className="p-2 pl-4 m-4 bg-neutral-500 max-w-sm rounded-3xl">
        <Item
          name={item1.name}
          quantity={item1.quantity}
          category={item1.category}
        />
      </div>

      <div className="p-2 pl-4 m-4 bg-yellow-700 max-w-sm rounded-3xl">
        <Item
          name={item2.name}
          quantity={item2.quantity}
          category={item2.category}
        />
      </div>

      <div className="p-2 pl-4 m-4 bg-blue-500 max-w-sm rounded-3xl">
        <Item
          name={item3.name}
          quantity={item3.quantity}
          category={item3.category}
        />
      </div>

      <div className="p-2 pl-4 m-4 bg-yellow-600 max-w-sm rounded-3xl">
        <Item
          name={item4.name}
          quantity={item4.quantity}
          category={item4.category}
        />
      </div>

      <div className="p-2 pl-4 m-4 bg-green-700 max-w-sm rounded-3xl">
        <Item
          name={item5.name}
          quantity={item5.quantity}
          category={item5.category}
        />
      </div>

      <div className="p-2 pl-4 m-4 bg-orange-500 max-w-sm rounded-3xl">
        <Item
          name={item6.name}
          quantity={item6.quantity}
          category={item6.category}
        />
      </div>

      <div className="p-2 pl-4 m-4 bg-red-600 max-w-sm rounded-3xl">
        <Item
          name={item7.name}
          quantity={item7.quantity}
          category={item7.category}
        />
      </div>

      <div className="p-2 pl-4 m-4 bg-amber-400 max-w-sm rounded-3xl">
        <Item
          name={item8.name}
          quantity={item8.quantity}
          category={item8.category}
        />
      </div>

      <div className="p-2 pl-4 m-4 bg-stone-600 max-w-sm rounded-3xl">
        <Item
          name={item9.name}
          quantity={item9.quantity}
          category={item9.category}
        />
      </div>

      <div className="p-2 pl-4 m-4 bg-gray-700 max-w-sm rounded-3xl">
        <Item
          name={item10.name}
          quantity={item10.quantity}
          category={item10.category}
        />
      </div>

      <div className="p-2 pl-4 m-4 bg-violet-600 max-w-sm rounded-3xl">
        <Item
          name={item11.name}
          quantity={item11.quantity}
          category={item11.category}
        />
      </div>

      <div className="p-2  pl-4 m-4 bg-teal-500 max-w-sm rounded-3xl">
        <Item
          name={item12.name}
          quantity={item12.quantity}
          category={item12.category}
        />
      </div>

      <div className="p-2 pl-4 m-4 bg-cyan-600 max-w-sm rounded-3xl">
        <Item
          name={item13.name}
          quantity={item13.quantity}
          category={item13.category}
        />
      </div>

      <div className="p-2 pl-4 m-4 bg-rose-500 max-w-sm rounded-3xl">
        <Item
          name={item14.name}
          quantity={item14.quantity}
          category={item14.category}
        />
      </div>

      <div className="p-2 pl-4 m-4 bg-lime-600 max-w-sm rounded-3xl">
        <Item
          name={item15.name}
          quantity={item15.quantity}
          category={item15.category}
        />
      </div>
    </main>
  );
}
