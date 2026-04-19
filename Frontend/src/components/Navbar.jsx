import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { SunIcon, MoonIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

function Navbar({ darkMode, setDarkMode }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { user, isLoggedIn, logout } = useAuth();
  const { totalItems } = useCart();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/search?q=${searchTerm}`);
      setSearchTerm("");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="flex flex-col md:flex-row md:items-center md:justify-between px-5 md:px-16 py-4 border-b border-gray-200 bg-white gap-3 md:gap-0  dark:bg-[#0A0A0A] dark:text-white sticky top-0 z-50">

      {/* Top Row */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to="/">
          <h2 className="text-2xl font-bold">UrbanStreet</h2>
        </Link>

        {/* Mobile Links */}
        <div className="flex gap-4 md:hidden text-sm items-center">
          <Link to="/">Home</Link>
          <Link to="/men">Men</Link>
          <Link to="/jackets">Jackets</Link>
          <Link to="/cart" className="relative">
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-pink-600 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          {isLoggedIn ? (
            <>
              {user?.role === "admin" && (
                <Link to="/admin" className="text-indigo-600 dark:text-indigo-400 font-bold">Admin</Link>
              )}
              <button onClick={handleLogout} className="text-red-500 font-medium">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
          <button>
            {darkMode ? (
              <SunIcon onClick={() => setDarkMode(!darkMode)} className="h-6 w-6 cursor-pointer" />
            ) : (
              <MoonIcon onClick={() => setDarkMode((prev) => !prev)} className="h-5 w-5 cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* Search */}


      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8 font-medium">
        <li><Link to="/" className="hover:text-pink-600 transition">Home</Link></li>
        <li><Link to="/men" className="hover:text-pink-600 transition">Men</Link></li>
        <li><Link to="/jackets" className="hover:text-pink-600 transition">Jackets</Link></li>
        <li><Link to="/kids" className="hover:text-pink-600 transition">Children</Link></li>
        <li>
          <Link to="/cart" className="relative flex items-center gap-1 hover:text-pink-600 transition">
            <ShoppingCartIcon className="h-5 w-5" />
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </li>

        {isLoggedIn ? (
          <>
            {user?.role === "admin" && (
              <li>
                <Link to="/admin" className="px-3 py-1 bg-black text-white dark:bg-white dark:text-black rounded-lg text-sm hover:scale-105 transition font-bold">
                  Dashboard
                </Link>
              </li>
            )}
            <li className="text-indigo-600 font-semibold dark:text-indigo-400">Hi, {user?.name?.split(" ")[0]}</li>
            <li>
              <button
                onClick={handleLogout}
                className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/login" className="hover:text-pink-600 transition">Login</Link></li>
            <li>
              <Link
                to="/signup"
                className="px-3 py-1 bg-indigo-500 text-white rounded-lg text-sm hover:bg-indigo-600 transition"
              >
                Signup
              </Link>
            </li>
          </>
        )}

        <li>
          {darkMode ? (
            <SunIcon onClick={() => setDarkMode(!darkMode)} className="h-6 w-6 cursor-pointer hover:text-yellow-400 transition" />
          ) : (
            <MoonIcon onClick={() => setDarkMode((prev) => !prev)} className="h-5 w-5 cursor-pointer hover:text-indigo-600 transition" />
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;