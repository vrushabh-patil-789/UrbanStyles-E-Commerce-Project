import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Kids from "./pages/Kids"
import Women from "./pages/Women"
import Men from "./pages/Men"
import ProductDetails from "./pages/ProductDetails";
import "./styles/main.css";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/product/:id" element={<ProductDetails />} />


        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
