import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Kids() {
  // frontend-only filter (static)
  const kidsProducts = products.filter(
    (product) => product.category === "kids"
  );

  return (
    <>
      <Navbar />

      <section className="kids-page">
        {/* LEFT FILTERS */}
        <aside className="kids-filters">
          <h3>Filters</h3>

          <div className="filter-group">
            <h4>Gender</h4>
            <label><input type="checkbox" /> Boys</label>
            <label><input type="checkbox" /> Girls</label>
            
          </div>

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
            <p>Showing {kidsProducts.length} products</p>

            <select>
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="kids-grid">
            {kidsProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Kids;
