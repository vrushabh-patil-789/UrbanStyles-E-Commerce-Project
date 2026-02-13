import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Men() {
  // frontend-only filter (static)
  const menProducts = products.filter(
    (product) => product.category === "men"
  );

  return (
    <>
      <Navbar />

      <section className="kids-page">
        {/* LEFT FILTERS */}
        <aside className="kids-filters">
          <h3>Filters</h3>

          

          <div className="filter-group">
            <h4>Category</h4>
            <label><input type="checkbox" /> T-Shirts</label>
            <label><input type="checkbox" /> Dresses</label>
            <label><input type="checkbox" /> Jeans & Pants</label>
            <label><input type="checkbox" /> Jackets & Hoodies</label>
            
          </div>

          
        </aside>

        {/* RIGHT PRODUCTS */}
        <div className="kids-content">
          <div className="kids-topbar">
            <p>Showing {menProducts.length} products</p>

            <select>
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="kids-grid">
            {menProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Men;
