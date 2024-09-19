// const ProductCard = (props) => {
//     const{name,image,prepTimeMinutes} = props.recipe;
//   return (
//     <div className="card">
//         <div className="card-header">
//             <h2>{name}</h2>
//         </div>
//         <div className="card-image">
//             <img src={image} alt={name} />
//         </div>
//         <div className="card-dis">
//             <p>{prepTimeMinutes}mins</p>
//         </div>
//     </div>
//   );
// };

// export default ProductCard;

const ProductCard = (props) => {
    const{name,image,difficulty} = props.recipe;
  return (
    <div className="card">
        
        <div className="card-header"></div>
        <div className="card-image">
            <img src="" alt="img" />
        </div>
        <div className="card-disc"></div>
      
      
    </div>
  );
};

export default ProductCard;
