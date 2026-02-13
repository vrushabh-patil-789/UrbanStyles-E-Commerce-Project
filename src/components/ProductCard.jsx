import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <img src={product.image} alt={product.name} />
        <h4>{product.name}</h4>
        <p>₹{product.price}</p>
      </Link>

      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;

