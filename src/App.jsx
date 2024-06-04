
import React, { useEffect, useState } from 'react';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then((res) => res.json())
      .then((data) => {
        console.log(data); 
        setRecipes(data.recipes);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
      });
  }, []); 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipe List</h1>
      </header>
      <main>
        {recipes.length > 0 ? (
          <ul>
            {recipes.map((recipe) => (
              <li key={recipe.id}>
                <h2>{recipe.title}</h2>
                <p>{recipe.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading recipes...</p>
        )}
      </main>
    </div>
  );
}

export default App;
