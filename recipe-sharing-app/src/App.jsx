

import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import recipeStore from './components/'
const App = () => {
    return (
        <div>
            <h1>Recipe Sharing App</h1>
            <AddRecipeForm />
            <RecipeList />
            <recipeStore/>
        </div>
    );
};

export default App;



