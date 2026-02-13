import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

function Cart() {
  return (

    <>

    <Navbar/>

    <section className="cart">
      <h2>Your Cart</h2>

      <div className="cart-container">
        {/* CART ITEMS */}
        <div className="cart-items">

          <div className="cart-item">
            <img src="/images/featured-img1.jpg" alt="Product" />

            <div className="cart-info">
              <h4>Men's Shirt</h4>
              <p>₹1499</p>
            </div>

            <div className="cart-qty">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>

            <button className="remove-btn">Remove</button>
          </div>

          <div className="cart-item">
            <img src="/images/featured-img2.jpg" alt="Product" />

            <div className="cart-info">
              <h4>Men's Polo</h4>
              <p>₹2999</p>
            </div>

            <div className="cart-qty">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>

            <button className="remove-btn">Remove</button>
          </div>

        </div>

        {/* SUMMARY */}
        <div className="cart-summary">
          <h3>Order Summary</h3>
          <p>Subtotal: <span>₹4498</span></p>
          <p>Shipping: <span>Free</span></p>
          <hr />
          <p className="total">Total: <span>₹4498</span></p>

          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </section>

    <Footer/>

    </>
  );
}

export default Cart;
