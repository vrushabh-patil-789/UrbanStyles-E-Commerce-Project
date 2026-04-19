import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../api/productApi";
import { useState, useEffect } from "react";
import useScrollReveal from "../hooks/ScrollReveal";

function Jackets({ darkMode, setDarkMode }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await getProducts();
        setProducts(data.filter(p => p.category === "jackets"));
      } catch (error) {
        console.error("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const [ref, isVisible] = useScrollReveal();

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <section ref={ref} className={`px-6 md:px-20 py-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

        <div>

          {/* TOP BAR */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <p className="text-sm dark:text-white">
              Showing {products.length} products
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {loading ? (
              <p className="col-span-full text-center py-10 text-white">Loading products...</p>
            ) : products.length === 0 ? (
              <p className="col-span-full text-center py-10 text-white">No products found.</p>
            ) : (
              products.map((product) => (
                <ProductCard key={product.id || product._id} product={product} />
              ))
            )}
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Jackets;
