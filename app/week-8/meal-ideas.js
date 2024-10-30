"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState();


  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setMeals(data.meals ||[]);
    } catch (error) {
      setError(error.message);
    }
  };


  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas(ingredient);
    }
  }, [ingredient]); 
 

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Meal Ideas</h1>
      {error && <p className="text-red-500">Error: {error}</p>}
      <ul className="list-disc pl-5">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="mb-2">
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}
