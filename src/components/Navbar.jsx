import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Navbar({ darkMode, setDarkMode }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/search?q=${searchTerm}`);
      setSearchTerm("");
      setMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md dark:text-white">

      {/* Main Bar */}
      <div className="flex items-center justify-between px-5 md:px-16 py-4">

        {/* Logo */}
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <h2 className="text-2xl font-bold tracking-tight">UrbanStreet</h2>
        </Link>

        {/* Desktop: Search */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center w-[500px] gap-2"
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

        {/* Desktop: Links */}
        <ul className="hidden md:flex items-center gap-8">
          <li><Link to="/" className="text-sm font-medium tracking-wide hover:text-indigo-600 transition-colors">Home</Link></li>
          <li><Link to="/men" className="text-sm font-medium tracking-wide hover:text-indigo-600 transition-colors">Men</Link></li>
          <li><Link to="/kids" className="text-sm font-medium tracking-wide hover:text-indigo-600 transition-colors">Children</Link></li>
          <li><Link to="/cart" className="text-sm font-medium tracking-wide hover:text-indigo-600 transition-colors">Cart</Link></li>
          <li>
            <button onClick={() => setDarkMode((prev) => !prev)} aria-label="Toggle dark mode">
              {darkMode ? <SunIcon className="h-5 w-5 cursor-pointer" /> : <MoonIcon className="h-5 w-5 cursor-pointer" />}
            </button>
          </li>
        </ul>

        {/* Mobile: Hamburger + Dark Mode */}
        <div className="flex items-center gap-3 md:hidden">
          <button onClick={() => setDarkMode((prev) => !prev)} aria-label="Toggle dark mode">
            {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen
              ? <XMarkIcon className="h-6 w-6" />
              : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden px-5 pb-5 flex flex-col gap-4 border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95">

          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="flex items-center gap-2 pt-4">
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

          {/* Mobile Nav Links */}
          <ul className="flex flex-col gap-1">
            {[
              { to: "/", label: "Home" },
              { to: "/men", label: "Men" },
              { to: "/kids", label: "Children" },
              { to: "/jackets", label: "Jackets" },
              { to: "/cart", label: "Cart" },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className="block px-2 py-2.5 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-indigo-600 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;