// <div className="container">
//   <h1 className="title">Products List</h1>
//   <div className="products-list">
//     {recipes.length > 0 ? (
//       recipes.map((recipe) => (
//         <ProductCard key={recipe.id} recipe={recipe} />
//       ))
//     ) : (
//       <p>Loading...</p>
//     )}
//   </div>
// </div>
import './App.css'
// import Product from './Product'

import { useState } from 'react';
import ProductCard from './components/ProductCard';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch data from the API
  const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/recipes');
    const data = await response.json();
    setRecipes(data.recipes);
    
  };

  fetchData();
  return (
    <>
      <h1 style={{textAlign:'center'}}>Recipes List</h1>
      <div id='data-container'>
        {
          recipes.map((recipe,index)=>{
            return <ProductCard key={index} recipe={recipe}/>
          })
        }
      </div>
    </>
  );
};

export default App;
