import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { useLocation } from "react-router-dom";

function Shop() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search");

  const filteredProducts = products.filter((product) =>
    searchQuery
      ? product.name.toLowerCase().includes(searchQuery.toLowerCase())
      : true
  );

  return (
    <>
      <Navbar />

      <section className="px-6 md:px-20 py-14">

        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Shop
        </h2>

        {searchQuery && (
          <p className="text-sm text-center mb-6">
            Showing results for: <span className="font-medium">{searchQuery}</span>
          </p>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </section>

      <Footer />
    </>
  );
}

export default Shop;
