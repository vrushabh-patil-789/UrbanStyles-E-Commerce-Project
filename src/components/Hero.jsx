import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative w-full h-[420px] md:h-[650px] overflow-hidden">

      <img
        src="/images/hero-men.jpg"
        alt="Men Fashion"
        className="w-full h-full object-cover object-left"
      />

      <div className="absolute inset-0 bg-black/10"></div>

      <div className="absolute top-1/2 left-6 md:left-20 -translate-y-1/2 max-w-xs md:max-w-lg">
        
        <h3 className="text-blue-600 text-sm md:text-lg mb-2">
          Season Sale
        </h3>

        <h1 className="text-3xl md:text-5xl font-bold mb-3 text-black">
          MEN'S FASHION
        </h1>

        <p className="text-sm md:text-lg mb-6 text-gray-800">
          Min. 35–70% Off
        </p>

        <Link to="/men">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md">
            Shop Now
          </button>
        </Link>

      </div>
    </section>
  );
}

export default Hero;