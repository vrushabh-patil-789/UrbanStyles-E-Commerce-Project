import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getProducts, addProduct, updateProduct, deleteProduct } from "../api/productApi";
import { toast } from "react-hot-toast";

function AdminDashboard({ darkMode, setDarkMode }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
    category: "men",
    description: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);

  const fetchProducts = async () => {
    try {
      const { data } = await getProducts();
      setProducts(data);
    } catch (error) {
      toast.error("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await updateProduct(currentProductId, newProduct);
        toast.success("Product updated successfully!");
      } else {
        await addProduct(newProduct);
        toast.success("Product added successfully!");
      }
      setShowAddForm(false);
      setIsEditing(false);
      setNewProduct({ name: "", price: "", image: "", category: "men", description: "" });
      fetchProducts();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to save product");
    }
  };

  const handleEditClick = (product) => {
    setNewProduct({
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      description: product.description || "",
    });
    setCurrentProductId(product._id);
    setIsEditing(true);
    setShowAddForm(true);
  };

  const handleDeleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await deleteProduct(id);
      toast.success("Product deleted");
      fetchProducts();
    } catch (error) {
      toast.error("Failed to delete product");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#0A0A0A]">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="flex-grow px-6 md:px-20 py-10">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold dark:text-white">Admin Dashboard</h2>
          <button
            onClick={() => {
              setShowAddForm(!showAddForm);
              setIsEditing(false);
              setNewProduct({ name: "", price: "", image: "", category: "men", description: "" });
            }}
            className="px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium transition-transform hover:scale-105"
          >
            {showAddForm ? "Cancel" : "Add New Product"}
          </button>
        </div>

        {showAddForm && (
          <div className="mb-12 bg-white dark:bg-[#111111] p-8 rounded-2xl shadow-xl border dark:border-zinc-800 transition-all">
            <h3 className="text-xl font-semibold mb-6 dark:text-white">
              {isEditing ? "Edit Product" : "Add New Inventory"}
            </h3>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-gray-300">Product Name</label>
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-lg border dark:bg-zinc-900 dark:border-zinc-700 dark:text-white"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-gray-300">Price (₹)</label>
                <input
                  type="number"
                  required
                  className="w-full p-3 rounded-lg border dark:bg-zinc-900 dark:border-zinc-700 dark:text-white"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-gray-300">Image URL</label>
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-lg border dark:bg-zinc-900 dark:border-zinc-700 dark:text-white"
                  value={newProduct.image}
                  onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-gray-300">Category</label>
                <select
                  className="w-full p-3 rounded-lg border dark:bg-zinc-900 dark:border-zinc-700 dark:text-white"
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                >
                  <option value="men">Men</option>
                  <option value="kids">Kids</option>
                  <option value="jackets">Jackets</option>
                  <option value="accessories">Accessories</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition shadow-lg"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        )}

        {/* PRODUCT LIST */}
        <div className="bg-white dark:bg-[#111111] rounded-2xl shadow-sm border dark:border-zinc-800 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 dark:bg-zinc-900 text-gray-500 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Product</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y dark:divide-zinc-800 text-sm">
              {loading ? (
                <tr>
                  <td colSpan="4" className="text-center py-10 font-medium">Loading items...</td>
                </tr>
              ) : products.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-10 font-medium text-gray-400">No products found in database</td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product._id} className="hover:bg-gray-50 dark:hover:bg-zinc-900/50 transition">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <img src={product.image} className="w-12 h-14 object-cover rounded-md" alt="" />
                        <span className="font-semibold dark:text-white">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="capitalize px-3 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs dark:text-gray-300">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-mono font-bold dark:text-white">₹{product.price}</td>
                    <td className="px-6 py-4 text-right flex justify-end gap-2">
                      <button
                        onClick={() => handleEditClick(product)}
                        className="text-indigo-600 hover:text-indigo-800 font-medium px-4 py-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product._id)}
                        className="text-red-500 hover:text-red-700 font-medium px-4 py-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default AdminDashboard;
