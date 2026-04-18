import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col">

      <Link to={`/product/${product.id}`} className="block flex-1">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[300px] object-cover p-2"
          />
          {added && (
            <div className="absolute top-20 left-0 w-full bg-white/60 dark:bg-black/60 text-black dark:text-white text-sm text-center py-2 font-medium">
              Added to cart!
            </div>
          )}
        </div>

        <div className="p-4">
          <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
            {product.name}
          </h4>
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            ₹{product.price}
          </p>
        </div>
      </Link>

      <div className="px-4 pb-4">
        <button
          onClick={handleAddToCart}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 rounded-xl transition-colors"
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
}

export default ProductCard;