"use client";
import { useState } from "react";
import { useEffect } from "react";

fetchmealIdeas = async () => {
    const response = await fetch('https://wwww.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}');
    const data = await response.json();
    setMeals(data.meals);
};


export default function MealIdeas(ingredient) {
    const [meals , setMeals] = useState([]);

    useEffect(() => {
        fetchmealIdeas();
    }, [ingredient]);



    return (
        <div>
            <h1>Meal Ideas</h1>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>{meal.strMeal}</li>
                ))}
            </ul>
        </div>
    );
}



