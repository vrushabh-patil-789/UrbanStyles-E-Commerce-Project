import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Kids() {
  const kidsProducts = products.filter(
    (product) => product.category === "kids"
  );

  return (
    <>
      <Navbar />

      <section className="px-6 md:px-20 py-14">

        <div className="grid md:grid-cols-[260px_1fr] gap-10">

          {/* FILTERS */}
          <aside className="border border-gray-200 p-5 h-fit">

            <h3 className="text-lg font-semibold mb-6">
              Filters
            </h3>

            {/* Gender */}
            <div className="mb-8">
              <h4 className="font-medium mb-3 text-sm">
                Gender
              </h4>

              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Boys
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Girls
                </label>
              </div>
            </div>

            {/* Category */}
            <div>
              <h4 className="font-medium mb-3 text-sm">
                Category
              </h4>

              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  T-Shirts
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Dresses
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Jeans & Pants
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Jackets & Hoodies
                </label>
              </div>
            </div>

          </aside>

          {/* PRODUCTS SIDE */}
          <div>

            {/* TOP BAR */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <p className="text-sm">
                Showing {kidsProducts.length} products
              </p>

              <select className="border border-gray-300 px-3 py-2 text-sm">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {kidsProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Kids;