import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import products from "../data/products";
import useScrollReveal from "../hooks/ScrollReveal";
import {useCart} from "../context/CartContext"
import { useState } from "react";

function ProductDetails({darkMode, setDarkMode}) {
  const [ref, isVisible] = useScrollReveal();
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === parseInt(id)
  );

  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (!product) {
    return <h2 ref={ref} className={`text-center mt-20 text-xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0":"opacity-0 translate-y-10"}`}>Product not found</h2>;
  }

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <section ref={ref} className={` px-6 md:px-20 py-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0":"opacity-0 translate-y-10"} dark:text-white`}>

        <div className=" grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[350px] md:h-[450px] object-cover"
            />
            {added && (
            <div className="absolute top-1/2 left-0 w-full bg-white/60 dark:bg-black/60 text-black dark:text-white text-sm text-center py-2 font-medium">
              Added to cart!
            </div>
          )}
          </div>
          

          {/* INFO */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              {product.name}
            </h2>

            <h3 className="text-xl font-bold mb-6">
              ₹{product.price}
            </h3>

            <p className="text-gray-700 mb-8 leading-relaxed">
              This is a premium quality {product.category} product.
              Built with high durability and modern design.
            </p>

            <button 
            onClick={handleAddToCart}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 rounded-xl transition-colors">
              Add to Cart
            </button>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default ProductDetails;
