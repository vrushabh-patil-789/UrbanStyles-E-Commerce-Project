import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

function Navbar({ darkMode, setDarkMode }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/search?q=${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex flex-col md:flex-row md:items-center md:justify-between px-5 md:px-16 py-4 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md gap-3 md:gap-0 dark:text-white">

      {/* Top Row */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to="/">
          <h2 className="text-2xl font-bold tracking-tight">UrbanStreet</h2>
        </Link>

        {/* Mobile Links */}
        <div className="flex gap-4 md:hidden text-sm font-medium">
          <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <Link to="/men" className="hover:text-indigo-600 transition-colors">Men</Link>
          <Link to="/kids" className="hover:text-indigo-600 transition-colors">Children</Link>
          <Link to="/cart" className="hover:text-indigo-600 transition-colors">Cart</Link>
          <button onClick={() => setDarkMode((prev) => !prev)}>
            {darkMode ? (
              <SunIcon className="h-5 w-5 cursor-pointer" />
            ) : (
              <MoonIcon className="h-5 w-5 cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* Search */}
      <form
        onSubmit={handleSearch}
        className="flex items-center w-full md:w-[500px] gap-2"
      >
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm text-black dark:text-white dark:bg-gray-900"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-full transition-colors"
        >
          Search
        </button>
      </form>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8">
        <li><Link to="/" className="text-sm font-medium tracking-wide hover:text-indigo-600 transition-colors">Home</Link></li>
        <li><Link to="/men" className="text-sm font-medium tracking-wide hover:text-indigo-600 transition-colors">Men</Link></li>
        <li><Link to="/kids" className="text-sm font-medium tracking-wide hover:text-indigo-600 transition-colors">Children</Link></li>
        <li><Link to="/cart" className="text-sm font-medium tracking-wide hover:text-indigo-600 transition-colors">Cart</Link></li>
        <li>
          <button onClick={() => setDarkMode((prev) => !prev)}>
            {darkMode ? (
              <SunIcon className="h-5 w-5 cursor-pointer" />
            ) : (
              <MoonIcon className="h-5 w-5 cursor-pointer" />
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;