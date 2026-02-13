import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "../components/Products";
import SaleBanner from "../components/SaleBanner";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      
      <SaleBanner />
      <Footer />
    </>
  );
}

export default Home;
