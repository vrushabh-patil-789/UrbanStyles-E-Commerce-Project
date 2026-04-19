import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { createRazorpayOrder, verifyPayment } from "../api/orderApi";
import { toast } from "react-hot-toast";

function Cart({darkMode, setDarkMode}) {
  const { cart, increaseQty, decreaseQty, removeItem, totalPrice, clearCart } = useCart();
  const { user, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [shippingAddress, setShippingAddress] = useState(user?.address || "");
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Load Razorpay Script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleCheckout = async () => {
    if (!isLoggedIn) {
      toast.error("Please login to proceed.");
      return navigate("/login");
    }

    if (!showAddressForm) {
      setShowAddressForm(true);
      return;
    }

    if (!shippingAddress.trim()) {
      return toast.error("Shipping address is required.");
    }

    setIsProcessing(true);
    const res = await loadRazorpayScript();

    if (!res) {
      toast.error("Razorpay SDK failed to load. Are you online?");
      setIsProcessing(false);
      return;
    }

    try {
      // 1. Create order on backend
      const { data } = await createRazorpayOrder({
        amount: totalPrice,
        items: cart.map(item => ({
          product: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        })),
        shippingAddress
      });

      // 2. Open Razorpay Modal
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: "INR",
        name: "UrbanStyles",
        description: "Order Payment",
        order_id: data.orderId,
        handler: async (response) => {
          try {
            // 3. Verify payment on backend
            const verifyRes = await verifyPayment({
              ...response,
              dbOrderId: data.dbOrderId
            });

            if (verifyRes.data.success) {
              toast.success("Order placed successfully!");
              clearCart();
              navigate("/api/orders/my"); // Redirect to orders page
            }
          } catch (err) {
            toast.error("Payment verification failed.");
          }
        },
        prefill: {
          name: user.name,
          email: user.email,
        },
        theme: {
          color: "#000000",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      toast.error(error.response?.data?.message || "Checkout failed");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>

      <section className="px-6 md:px-20 py-14 dark:bg-[#0A0A0A]">

        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 dark:text-white">
          Your Cart
        </h2>

        {/* EMPTY CART STATE */}
        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-6 dark:text-gray-300">Your cart is empty.</p>
            <Link
              to="/"
              className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-gray-800 transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-10">

            {/* CART ITEMS */}
            <div className="md:col-span-2 space-y-6 dark:bg-[#1A1A1A]">
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
                    <h4 className="font-medium mb-1 dark:text-white">{item.name}</h4>
                    <p className="font-semibold dark:text-white">₹{item.price}</p>
                    <p className="text-md text-gray-500 mt-1 dark:text-violet-700">
                      Item total: ₹{item.price * item.quantity}
                    </p>
                  </div>

                  {/* QUANTITY CONTROLS */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="w-8 h-8 border border-gray-300 hover:bg-gray-100 transition dark:bg-gray-500 dark:hover:bg-white/80"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="w-8 h-8 border border-gray-300 hover:bg-gray-100 transition dark:bg-gray-500 dark:hover:bg-white/80"
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
            <div className="border border-gray-200 p-6 h-fit rounded-md dark:bg-[#1A1A1A] dark:text-white">
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

              {/* ADDRESS FORM */}
              {showAddressForm && (
                <div className="mt-6">
                  <label className="block text-sm font-medium mb-2">Shipping Address</label>
                  <textarea
                    className="w-full p-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-black"
                    rows="3"
                    placeholder="Enter your full address..."
                    value={shippingAddress}
                    onChange={(e) => setShippingAddress(e.target.value)}
                  />
                </div>
              )}

              <button
                onClick={handleCheckout}
                disabled={isProcessing}
                className="w-full mt-6 py-3 bg-black text-white hover:bg-gray-800 transition rounded-md disabled:bg-gray-400"
              >
                {isProcessing ? "Processing..." : showAddressForm ? "Pay Now" : "Proceed to Checkout"}
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