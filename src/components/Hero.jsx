import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <img
        src="/images/hero-men.jpg"
        alt="Men Fashion"
        className="hero-bg"
      />

      <div className="hero-content">
        <h3>Season Sale</h3>
        <h1>MEN'S FASHION</h1>
        <p>Min. 35–70% Off</p>
        <Link to="/men" >
        <button>Shop Now</button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
