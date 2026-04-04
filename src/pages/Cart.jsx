import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useCart } from "../context/CartContext";   // ← import
import { Link } from "react-router-dom";

function Cart() {
  const { cart, increaseQty, decreaseQty, removeItem, totalPrice } = useCart();

  return (
    <>
      <Navbar />

      <section className="px-6 md:px-20 py-14">

        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Your Cart
        </h2>

        {/* EMPTY CART STATE */}
        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-6">Your cart is empty.</p>
            <Link
              to="/shop"
              className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-10">

            {/* CART ITEMS */}
            <div className="md:col-span-2 space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-5 border-b pb-6"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-28 object-cover"
                  />

                  <div className="flex-1">
                    <h4 className="font-medium mb-1">{item.name}</h4>
                    <p className="font-semibold">₹{item.price}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Item total: ₹{item.price * item.quantity}
                    </p>
                  </div>

                  {/* QUANTITY CONTROLS */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="w-8 h-8 border border-gray-300 hover:bg-gray-100 transition"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="w-8 h-8 border border-gray-300 hover:bg-gray-100 transition"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* ORDER SUMMARY */}
            <div className="border border-gray-200 p-6 h-fit rounded-md">
              <h3 className="text-lg font-semibold mb-6">Order Summary</h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <hr />
                <div className="flex justify-between font-semibold text-base">
                  <span>Total</span>
                  <span>₹{totalPrice}</span>
                </div>
              </div>

              <button className="w-full mt-6 py-3 bg-black text-white hover:bg-gray-800 transition rounded-md">
                Proceed to Checkout
              </button>
            </div>

          </div>
        )}

      </section>

      <Footer />
    </>
  );
}

export default Cart;