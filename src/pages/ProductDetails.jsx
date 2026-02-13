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
    return <h2>Product not found</h2>;
  }

  return (
    <>
      <Navbar />

      <section className="product-details">
        <div className="details-container">

          <div className="details-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="details-info">
            <h2>{product.name}</h2>
            <h3>₹{product.price}</h3>

            <p>
              This is a premium quality {product.category} product.
              Built with high durability and modern design.
            </p>

            <button className="buy-btn">Add to Cart</button>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default ProductDetails;
