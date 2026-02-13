import { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

function Products() {
  const [index, setIndex] = useState(0);
  const visibleCards = 4; // ONLY 4 visible on screen
  const cardWidth = 260;  // width + gap (IMPORTANT)

  const nextSlide = () => {
    if (index < products.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="products">
      <h2>Featured Products</h2>

      <div className="products-slider">
        <button className="slider-btn left" onClick={prevSlide}>
          ‹
        </button>

        <div className="products-window">
          <div
            className="products-track"
            style={{
              transform: `translateX(-${index * cardWidth}px)`,
            }}
          >
            {products.map((product) => (
              <div className="product-slide" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        <button className="slider-btn right" onClick={nextSlide}>
          ›
        </button>
      </div>
    </section>
  );
}

export default Products;
