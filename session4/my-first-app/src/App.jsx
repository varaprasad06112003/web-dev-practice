// src/App.jsx
import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes,setFilteredRecipes] = useState([]);
  const [value, setValue] = useState(0);
  const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/recipes');
    const data = await response.json();
    setRecipes(data.recipes);
    setFilteredRecipes(data.recipes);
    console.log(data);
    
  };
  const handleclick = () =>{
    // console.log(value,typeof value);
    if(value === 0) setFilteredRecipes(recipes);
    else{
        const filteredRecipes = recipes.filter((recipe) => {
            
            return recipe.rating >= Number(value);
        })
        // console.log(filteredRecipes);
        setFilteredRecipes(filteredRecipes);
    }
  }
  useEffect (()=>{
      fetchData();
  },[]) 

  return (
    <div className="container">
      <h1 className="title">Recipes List</h1>
      <div className='search'>
        <input type="text" className='inputfield' onChange={(e) => setValue(e.target.value)} onKeyDown={handleclick}/>
    </div>
      <div className="products-list">
        {
          filteredRecipes.map((recipe) => (
            <ProductCard key={recipe.id} recipe={recipe} />
          ))
         }
      </div>
    </div>
  );
};

export default App;
