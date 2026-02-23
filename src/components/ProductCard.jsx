import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="border border-gray-200 p-4 bg-white hover:shadow-lg transition duration-300 flex flex-col">

      <Link
        to={`/product/${product.id}`}
        className="block flex-1"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[200px] object-cover mb-3"
        />

        <h4 className="text-sm font-medium mb-1 text-gray-800">
          {product.name}
        </h4>

        <p className="font-semibold text-gray-900 mb-3">
          ₹{product.price}
        </p>
      </Link>

      <button className="mt-auto px-3 py-2 bg-black text-white text-sm hover:bg-gray-800 transition rounded-md">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
