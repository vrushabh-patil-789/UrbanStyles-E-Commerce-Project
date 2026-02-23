import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

function Cart() {
  return (
    <>
      <Navbar />

      <section className="px-6 md:px-20 py-14">

        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Your Cart
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* CART ITEMS */}
          <div className="md:col-span-2 space-y-6">

            {/* ITEM 1 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 border-b pb-6">

              <img
                src="/images/featured-img1.jpg"
                alt="Product"
                className="w-24 h-28 object-cover"
              />

              <div className="flex-1">
                <h4 className="font-medium mb-1">Men's Shirt</h4>
                <p className="font-semibold">₹1499</p>
              </div>

              <div className="flex items-center gap-3">
                <button className="w-8 h-8 border border-gray-300">-</button>
                <span>1</span>
                <button className="w-8 h-8 border border-gray-300">+</button>
              </div>

              <button className="text-red-600 text-sm hover:underline">
                Remove
              </button>

            </div>

            {/* ITEM 2 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 border-b pb-6">

              <img
                src="/images/featured-img2.jpg"
                alt="Product"
                className="w-24 h-28 object-cover"
              />

              <div className="flex-1">
                <h4 className="font-medium mb-1">Men's Polo</h4>
                <p className="font-semibold">₹2999</p>
              </div>

              <div className="flex items-center gap-3">
                <button className="w-8 h-8 border border-gray-300">-</button>
                <span>1</span>
                <button className="w-8 h-8 border border-gray-300">+</button>
              </div>

              <button className="text-red-600 text-sm hover:underline">
                Remove
              </button>

            </div>

          </div>

          {/* SUMMARY */}
          <div className="border border-gray-200 p-6 h-fit rounded-md">

            <h3 className="text-lg font-semibold mb-6">
              Order Summary
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹4498</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <hr />

              <div className="flex justify-between font-semibold text-base ">
                <span>Total</span>
                <span>₹4498</span>
              </div>
            </div>

            <button className="w-full mt-6 py-3 bg-black text-white hover:bg-gray-800 transition rounded-md">
              Proceed to Checkout
            </button>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Cart;
