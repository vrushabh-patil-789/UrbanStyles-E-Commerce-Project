import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === parseInt(id)
  );

  if (!product) {
    return <h2 className="text-center mt-20 text-xl">Product not found</h2>;
  }

  return (
    <>
      <Navbar />

      <section className="px-6 md:px-20 py-14">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[350px] md:h-[450px] object-cover"
            />
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

            <button className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition">
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
