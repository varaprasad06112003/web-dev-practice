// // src/App.jsx
// import { useState } from 'react';
// import ProductCard from './components/ProductCard';
// import './App.css';

// const App = () => {
//   const [recipes, setRecipes] = useState([]);
//   const fetchData = async () => {
//     const response = await fetch('https://dummyjson.com/recipes');
//     const data = await response.json();
//     setRecipes(data.recipes);
    
//   };
//   fetchData();

//   return (
//     <div className="container">
//       <h1 className="title">Products List</h1>
//       <div className="products-list">
//         {
//           recipes.map((recipe) => (
//             <ProductCard key={recipe.id} recipe={recipe} />
//           ))
//          }
//       </div>
//     </div>
//   );
// };

// export default App;

// src/App.jsx
import { useState } from "react";
import ProductCard from "./components/ProductCard"; // Import your ProductCard component
import "./App.css"; // Import your CSS for styling

const App = () => {
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [rating, setRating] = useState(""); // To handle the search input for rating
    const fetchData = async () => {
        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();
        setRecipes(data.recipes);
        setFilteredRecipes(data.recipes);
    };
    fetchData();
    const handleRatingChange = (e) => {
        const searchRating = e.target.value;
        setRating(searchRating);
        if (searchRating) {
            const filtered = recipes.filter((recipe) =>
                recipe.rating >= searchRating
            );
            setFilteredRecipes(filtered);
        } else {
            setFilteredRecipes(recipes);
        }
    };

    return (
        <div className="container">
            <h1 className="title">Recipies List</h1>

            {/* Search bar for rating */}
            <div className="search-bar">
                <label htmlFor="rating-search">Search by Rating:</label>
                <input
                    id="rating-search"
                    type="number"
                    value={rating}
                    onChange={handleRatingChange}
                    placeholder="Enter rating (e.g. 4)"
                />
            </div>

            {/* Render the filtered product cards */}
            <div className="products-list">
                {filteredRecipes.map((recipe) => (
                    <ProductCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default App;
