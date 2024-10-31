"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function MealList({ meals, onMealClick }) {
  const colors = ["#ff6347", "#ffa500", "#ffff00", "#adff2f", "#00ff00", "#00ced1", "#1e90ff", "#ff69b4"];

  return (
    <motion.ul
      className="list-disc pl-8 space-y-4 bg-black p-4 rounded-lg shadow-md"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {meals.map((meal, index) => (
        <motion.li
          key={meal.idMeal}
          className="text-lg text-white transition-colors duration-200 transform hover:scale-105 bg-gray-800 p-2 rounded-md"
          onMouseEnter={() => console.log(`Hovered on: ${meal.strMeal}`)}
          onMouseLeave={() => console.log(`Unhovered on: ${meal.strMeal}`)}
          onClick={() => onMealClick(meal)}
          whileHover={{ scale: 1.1, color: colors[index % colors.length], fontWeight: "bold" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {meal.strMeal}
        </motion.li>
      ))}
    </motion.ul>
  );
}

function Loading() {
  return (
    <motion.p
      className="text-yellow-300 font-semibold mb-4 bg-black p-2 rounded-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      style={{ animation: "pulse 2s infinite" }}
    >
      Loading...
    </motion.p>
  );
}

function Error({ message }) {
  return <p className="text-red-300 font-semibold mb-4 bg-black p-2 rounded-md">Error: {message}</p>;
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const fetchMealIdeas = async (ingredient) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas(ingredient);
    }
  }, [ingredient]);

  const handleMealClick = (meal) => {
    console.log(`Clicked on: ${meal.strMeal}`);
  };

  return (
    <div className="p-8 bg-black rounded-lg shadow-md m-6">
      <h1 className="text-3xl font-extrabold text-white mb-8">Meal Ideas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
      {loading && <Loading />}
      {error && <Error message={error} />}
      <MealList meals={meals} onMealClick={handleMealClick} />
    </div>
  );
}
