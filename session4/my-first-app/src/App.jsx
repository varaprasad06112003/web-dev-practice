// src/App.jsx
import { useState } from 'react';
import ProductCard from './components/ProductCard';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch data from the API when the component mounts
  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/recipes');
      const data = await response.json();
      setRecipes(data.recipes);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();

  return (
    <div className="container">
      <h1 className="title">Products List</h1>
      <div className="products-list">
        {
          recipes.map((recipe) => (
            <ProductCard key={recipe.id} recipe={recipe} />
          ))
         }
      </div>
    </div>
  );
};

export default App;
