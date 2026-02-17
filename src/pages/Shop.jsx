import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { useLocation } from "react-router-dom";


function Shop() {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search");



  return (
    <>
      <Navbar />

         <div className="shop-grid">
           {products
             .filter((product) =>
               searchQuery
                 ? product.name.toLowerCase().includes(searchQuery.toLowerCase())
                 : true
            )
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>


      <Footer />
    </>
  );
}

export default Shop;
