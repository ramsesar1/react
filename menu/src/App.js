import React from 'react';
import './App.css';

function App() {
  
  const recipes = [
    { id: 1, title: "Beef Stroganoff", description: "Lorem ipsum dolor sit amet. Sit aliquid velit" },
    { id: 2, title: "Chicken Parmesan", description: "Lorem ipsum dolor sit amet. Sit aliquid velit" },
    { id: 3, title: "Pork Fried Rice", description: "Lorem ipsum dolor sit amet. Sit aliquid velit" },
    { id: 4, title: "Fish Tacos", description: "Lorem ipsum dolor sit amet. Sit aliquid velit" },
    { id: 5, title: "lorem ipsum", description: "Lorem ipsum dolor sit amet. Sit aliquid velit" },
    { id: 6, title: "lorem ipsum", description: "Lorem ipsum dolor sit amet. Sit aliquid velit" },
    { id: 7, title: "lorem ipsum", description: "Lorem ipsum dolor sit amet. Sit aliquid velit" },
    { id: 8, title: "lorem ipsum", description: "Lorem ipsum dolor sit amet. Sit aliquid velit" }
  ];

  return (
    <div className="App">
      <h1>Recetas de cocina</h1>
      <div className="search-bar">
        <input type="text" placeholder="Nombre de la receta" />
        <button>Buscar</button>
      </div>
      <div className="recipe-container">
        {recipes.map(recipe => (
          <div key={recipe.id} className="recipe-item">
            <div className="recipe-image-placeholder"></div>
            <div className="recipe-title">{recipe.title}</div>
            <p className="recipe-text-placeholder">{recipe.description}</p>
            <button>Ver</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
