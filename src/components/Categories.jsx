import { Link } from "react-router-dom";



function Categories() {
  return (
    <section className="categories">
      {/* LEFT BIG CARD */}
      <div className="cat-card cat-big">
        <img src="/images/Women.jpg" alt="Women Style" />
        <div className="cat-content">
          <span className="cat-tag">New Arrivals</span>
          <h3>Women's Style</h3>
          <p>Up to 70% Off</p>
          <Link to="women">
          <button>Shop Now</button>
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="cat-right">
        <div className="cat-card">
          <img src="/images/twokids.jpg" alt="Handbag" />
          <div className="cat-content">
            <span className="cat-off">25% OFF</span>
            <h4>New Arrivals: Kids</h4>
            <Link to="/kids">
            <button>Shop Now</button>
            </Link>
            
          </div>
        </div>

        <div className="cat-card">
          <img src="/images/winter.jpg" alt="Watch" />
          <div className="cat-content">
            <span className="cat-off">45% OFF</span>
            <h4>Jackets</h4>
            
            <button>Shop Now</button>
            
          </div>
        </div>

        <div className="cat-card cat-wide">
          <img src="/images/mens.jpg" alt="Backpack" />
          <div className="cat-content">
            <span className="cat-tag categories-right-bottom-content">Hot Deal</span>
            <h4 className="categories-right-bottom-content">Men's Style</h4>
            <p className="categories-right-bottom-content" >Min. 40–80% Off</p>
            
            <Link to="/men"> 
            <button className="categories-right-bottom-content" >Shop Now</button>
            </Link> 
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
