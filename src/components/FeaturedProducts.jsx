import { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";


function FeaturedProducts() {
  const [index, setIndex] = useState(0);
  const visibleCount = 4; // how many cards visible

  const nextSlide = () => {
    if (index < products.length - visibleCount) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="featured">
      <h2>Featured Products</h2>

      <div className="slider-container">
        <button className="slider-btn left" onClick={prevSlide}>
          ‹
        </button>

        <div className="slider-window">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${index * 260}px)` }}
          >
            {products.map((item) => (
              <div key={item.id} className="featured-item">
                <ProductCard product={item} />
                <img src={item.image} alt={item.name} />
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
                <button>Add to Cart</button>
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

export default FeaturedProducts;
