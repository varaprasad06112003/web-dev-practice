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
    const { name, image, rating } = props.recipe;

    return (
        <div className="card">
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>Rating: {rating}</p>

        </div>
    );
};

export default ProductCard;
