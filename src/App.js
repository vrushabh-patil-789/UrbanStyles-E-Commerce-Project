import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import Cart from "./pages/Cart";
import Kids from "./pages/Kids"
import SearchResults from "./pages/SearchResults";
import Men from "./pages/Men"
import ProductDetails from "./pages/ProductDetails";
import Jackets from "./pages/Jackets";
import "./styles/main.css";



function App() {
  
  const [darkMode, setDarkMode] = useState(()=> {
    return localStorage.getItem("theme") === "dark";
  })

  useEffect(()=> {
    if(darkMode){
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light")
    }
  },[darkMode])


  return (
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode}/>} />
        
        <Route path="/cart" element={<Cart darkMode={darkMode} setDarkMode={setDarkMode}/>} />
        <Route path="/kids" element={<Kids darkMode={darkMode} setDarkMode={setDarkMode}/>} />
        <Route path="/men" element={<Men darkMode={darkMode} setDarkMode={setDarkMode}/>} />
        <Route path="/jackets" element={<Jackets darkMode={darkMode} setDarkMode={setDarkMode}/>} />
        <Route path="/search" element={<SearchResults darkMode={darkMode} setDarkMode={setDarkMode}/>} />
        <Route path="/product/:id" element={<ProductDetails darkMode={darkMode} setDarkMode={setDarkMode}/>} />


        
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
