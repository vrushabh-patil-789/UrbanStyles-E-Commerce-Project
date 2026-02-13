function SaleBanner() {
  return (
    <section className="sale-banner">
      {/* MEN */}
      <div className="sale-card">
        <img src="/images/salebanner-men.jpg" alt="Men Fashion Sale" />

        <div className="sale-content">
          <h3>Men's Fashion</h3>
          <p>Min. 50% Off</p>
          <button>Shop Now</button>
        </div>
      </div>

      {/* WOMEN */}
      <div className="sale-card">
        <img  src="/images/salebanner-women.jpg" alt="Women Fashion Sale" />

        <div className="sale-content">
          <h3>Women's Wear</h3>
          <p>Min. 35% Off</p>
          <button>Shop Now</button>
        </div>
      </div>
    </section>
  );
}

export default SaleBanner;
