import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getMyOrders } from "../api/orderApi";
import { toast } from "react-hot-toast";

function Orders({ darkMode, setDarkMode }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await getMyOrders();
        setOrders(data.orders);
      } catch (error) {
        toast.error("Failed to load orders");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0A0A0A]">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="flex-grow px-6 md:px-20 py-14">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">Your Orders</h2>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black dark:border-white"></div>
          </div>
        ) : orders.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg dark:text-gray-400">You haven't placed any orders yet.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {orders.map((order) => (
              <div
                key={order._id}
                className="border dark:border-zinc-800 rounded-xl overflow-hidden bg-white dark:bg-[#111111] shadow-sm hover:shadow-md transition-shadow"
              >
                {/* ORDER HEADER */}
                <div className="bg-gray-50 dark:bg-zinc-900/50 px-6 py-4 flex flex-wrap justify-between items-center gap-4 border-b dark:border-zinc-800">
                  <div className="flex gap-8">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Order Placed</p>
                      <p className="text-sm font-medium dark:text-gray-200">
                        {new Date(order.createdAt).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Total Amount</p>
                      <p className="text-sm font-bold dark:text-white">₹{order.totalAmount}</p>
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Status</p>
                      <span className={`text-xs font-bold uppercase px-2 py-1 rounded-full ${order.paymentStatus === "paid"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                        }`}>
                        {order.paymentStatus}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400 mb-1">Order ID</p>
                    <p className="text-xs font-mono text-gray-600 dark:text-gray-500">#{order._id.toUpperCase()}</p>
                  </div>
                </div>

                {/* ORDER ITEMS */}
                <div className="p-6">
                  <div className="grid gap-6">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-6">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-24 object-cover rounded-md flex-shrink-0"
                        />
                        <div className="flex-grow">
                          <h4 className="font-semibold text-gray-900 dark:text-white">{item.name}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Qty: {item.quantity}</p>
                          <p className="text-sm font-medium mt-1 dark:text-gray-300">₹{item.price}</p>
                        </div>
                        <div className="hidden md:block">

                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Orders;
