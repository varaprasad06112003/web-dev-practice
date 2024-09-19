// // src/components/ProductCard.jsx
// const ProductCard = (props) => {
//     const{name,image,rating} = props.recipe;
//   return (
//     <div className="card">
//       <h2>{name}</h2>
//       <img src={thumbnail} alt={name} />
//       <p>{rating}</p>
//     </div>
//   );
// };

// export default ProductCard;

// src/components/ProductCard.jsx
const ProductCard = (props) => {
    const { name, image, rating } = props.recipe; // Destructuring the correct fields

    return (
        <div className="card">
            {/* <div className="card-header">
                <h2>{name}</h2>
            </div>
            <div className="card-image">
                <img src={image} alt={name} />
            </div>
            <div className="card-disc">
                <p>Rating: {rating}</p>
            </div> */}
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>Rating: {rating}</p>
            
        </div>
    );
};

export default ProductCard;
