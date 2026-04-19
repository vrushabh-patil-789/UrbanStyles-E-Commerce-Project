import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getProduct } from "../api/productApi";
import useScrollReveal from "../hooks/ScrollReveal";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";

function ProductDetails({ darkMode, setDarkMode }) {
  const [ref, isVisible] = useScrollReveal();
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isLoggedIn } = useAuth();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await getProduct(id);
        setProduct(data);
      } catch (error) {
        console.error("Product fetch failed");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-[#0A0A0A] dark:text-white">
        <p className="text-xl animate-pulse">Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col dark:bg-[#0A0A0A]">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <h2 
          ref={ref} 
          className={`text-center mt-20 text-xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} dark:text-white`}
        >
          Product not found
        </h2>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <section 
        ref={ref} 
        className={`px-6 md:px-20 py-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} dark:text-white`}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl"
            />
            {added && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/60 dark:bg-black/60 text-indigo-600 dark:text-indigo-400 text-2xl font-bold rounded-2xl">
                Added to Cart!
              </div>
            )}
          </div>

          {/* INFO */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
              {product.name}
            </h2>

            <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              ₹{product.price}
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              This is a premium quality {product.category} product.
              Built with high durability and modern design.
            </p>

            <button 
              onClick={handleAddToCart}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium py-3 rounded-xl transition-colors shadow-md hover:shadow-lg"
            >
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
