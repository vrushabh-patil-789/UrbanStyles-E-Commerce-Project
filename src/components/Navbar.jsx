import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { SunIcon, MoonIcon} from "@heroicons/react/24/solid";

function Navbar({darkMode, setDarkMode}) {
  
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
    <nav className="flex flex-col md:flex-row md:items-center md:justify-between px-5 md:px-16 py-4 border-b border-gray-200 bg-white gap-3 md:gap-0  dark:bg-[#0A0A0A] dark:text-white">
      
      {/* Top Row */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to="/">
          <h2 className="text-2xl font-bold">UrbanStreet</h2>
        </Link>

        {/* Mobile Links */}
        <div className="flex gap-4 md:hidden text-sm">
          <Link to="/">Home</Link>
          <Link to="/men">Men</Link>
          <Link to="/kids">Children</Link>
          <Link to="/cart">Cart</Link>
          <button>
            {darkMode ? (
            <SunIcon onClick={()=> setDarkMode(!darkMode)} className="h-6 w-6 cursor-pointer"></SunIcon>
          ):(<MoonIcon onClick={()=> setDarkMode(prev => !prev)} className="h-5 w-5 cursor-pointer"></MoonIcon>)}
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
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-400 text-white rounded-md "
        >
          Search
        </button>
      </form>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8 font-medium">
        <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
        <li><Link to="/men" className="hover:text-blue-600">Men</Link></li>
        <li><Link to="/kids" className="hover:text-blue-600">Children</Link></li>
        <li><Link to="/cart" className="hover:text-blue-600">Cart</Link></li>
        <li>
          {darkMode ? (
            <SunIcon onClick={()=> setDarkMode(!darkMode)} className="h-6 w-6 cursor-pointer"></SunIcon>
          ):(<MoonIcon onClick={()=> setDarkMode(prev => !prev)} className="h-5 w-5 cursor-pointer"></MoonIcon>)}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;