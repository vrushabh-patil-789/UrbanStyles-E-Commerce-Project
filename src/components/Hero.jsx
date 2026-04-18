import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/ScrollReveal";

function Hero() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`relative w-full h-[300px] md:h-[650px] overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      <img
        src="/images/hero-men.jpg"
        alt="Men Fashion"
        className="w-full h-full object-cover object-center md:object-left"
      />

      <div className="absolute inset-0 bg-black/10"></div>

      <div className="absolute top-1/2 left-6 md:left-20 -translate-y-1/2 max-w-xs md:max-w-lg">

        {/* Label */}
        <span className="text-xs font-semibold tracking-widest uppercase text-indigo-500 mb-3 block">
          Season Sale
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-3">
          MEN'S FASHION
        </h1>

        {/* Subtext */}
        <p className="text-base text-black mb-6">
          Min. 35–70% Off
        </p>

        <Link to="/men">
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-colors">
            Shop Now
          </button>
        </Link>

      </div>
    </section>
  );
}

export default Hero;