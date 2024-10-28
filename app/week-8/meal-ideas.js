"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchMealIdeas = async () => {
            try {
                const response = await fetch(
                    `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken${ingredient}`
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setMeals(data.meals || []);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchMealIdeas();
    }, [ingredient]);

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-semibold mb-6 text-gray-800">Meal Ideas</h1>
            {error && <p className="text-red-600 mb-4">Error: {error}</p>}
            <ul className="list-disc pl-6 space-y-2">
                {meals.map((meal) => (
                    <li key={meal.idMeal} className="text-lg text-gray-700">
                        {meal.strMeal}
                    </li>
                ))}
            </ul>
        </div>
    );
}
