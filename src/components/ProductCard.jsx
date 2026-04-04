import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";

function ProductCard({ product }) {
  const {addToCart} = useCart();

  

  const [added, setAdded] = useState(false);

  const handleAddToCart = (e) => {
  e.preventDefault();
  addToCart(product);
  setAdded(true);
  setTimeout(() => setAdded(false), 2000);
};

  return (
    <div className="border border-gray-200 rounded-md p-4 bg-white hover:shadow-lg transition duration-300 flex flex-col dark:bg-[#1A1A1A] dark:border-white/10 ">
      

      <Link
        to={`/product/${product.id}`}
        className="block flex-1"
      >
        <div className="relative">

          <img
          src={product.image}
          alt={product.name}
          className="w-full h-[200px] object-cover mb-3"
          />
          {added && (
          <div className="absolute top-20 left-0 w-full bg-white/50 text-black text-lg text-center py-2 ">
          Added to cart!
          </div>
           )}

        </div>

        <h4 className="text-sm font-medium mb-1 text-gray-800 dark:text-white">
          {product.name}
        </h4>

        <p className="font-semibold text-gray-900 mb-3 dark:text-white">
          ₹{product.price}
        </p>
      </Link>
      
      
      <button 
      onClick={handleAddToCart}
      className="mt-auto px-3 py-2 bg-pink-600 text-white text-sm hover:bg-pink-500 transition rounded-md">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
