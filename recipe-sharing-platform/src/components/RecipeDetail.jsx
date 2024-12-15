import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function RecipeDetail() {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch recipe details from the mock data
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find(
          (item) => item.id === parseInt(id, 10)
        );
        if (selectedRecipe) {
          setRecipe(selectedRecipe);
        } else {
          navigate("/"); // Redirect to home if recipe not found
        }
      })
      .catch((error) => console.error("Error loading recipe data:", error));
  }, [id, navigate]);

  if (!recipe) {
    return <p>Loading...</p>; // Show a loading message while fetching data
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
      >
        Back to Home
      </button>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-6">{recipe.summary}</p>
          <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
          <ul className="list-disc pl-5 mb-6">
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index} className="text-gray-600">
                {ingredient}
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold mb-3">Cooking Instructions</h2>
          <ol className="list-decimal pl-5 space-y-2">
            {recipe.steps?.map((step, index) => (
              <li key={index} className="text-gray-600">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
