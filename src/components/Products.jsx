import { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

function Products() {
  const [index, setIndex] = useState(0);

  const visibleCards = 4;
  const cardWidth = 260;

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
    <section className="px-6 md:px-20 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
        Featured Products
      </h2>

      {/* MOBILE VERSION */}
      <div className="md:hidden overflow-x-auto flex gap-4 snap-x snap-mandatory pb-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[75%] snap-start"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* DESKTOP SLIDER */}
      <div className="hidden md:flex relative items-center">

        <button
          onClick={prevSlide}
          className="absolute -left-12 z-10 bg-black text-white w-10 h-10 flex items-center justify-center text-2xl"
        >
          ‹
        </button>

        <div className="overflow-hidden w-full max-w-[1040px] mx-auto">
          <div
            className="flex gap-5 transition-transform duration-300"
            style={{
              transform: `translateX(-${index * cardWidth}px)`,
            }}
          >
            {products.map((product) => (
              <div key={product.id} className="min-w-[240px]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute -right-12 z-10 bg-black text-white w-10 h-10 flex items-center justify-center text-2xl"
        >
          ›
        </button>

      </div>
    </section>
  );
}

export default Products;