import { useState } from "react";
import { useNavigate } from "react-router-dom";


import { Link } from "react-router-dom";

function Navbar() {
  
const [searchTerm, setSearchTerm] = useState("");
const navigate = useNavigate();

const handleSearch = (e) => {
  e.preventDefault();
  if (searchTerm.trim() !== "") {
    navigate(`/shop?search=${searchTerm}`);
    setSearchTerm("");
  }
};



  return (
    <nav className="navbar">
      <h2 className="logo">UrbanStyle</h2>

      <form className="nav-search" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
      </form>


      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
