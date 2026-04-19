const mongoose = require("mongoose");
const User = require("./models/user.model");
const Product = require("./models/product.model");

const seedAdmin = async () => {
  try {
    const adminExists = await User.findOne({ role: "admin" });
    if (!adminExists) {
      console.log("🌱 Seeding default admin...");
      await User.create({
        name: "Administrator",
        username: "admin",
        email: "admin@urbanstyles.com",
        password: "admin123", // Will be hashed by pre-save hook
        role: "admin",
      });
      console.log("✅ Admin seeded: admin / admin123");
    }
  } catch (error) {
    console.error("❌ Error seeding admin:", error.message);
  }
};

const seedProducts = async () => {
  try {
    const productCount = await Product.countDocuments();
    if (productCount === 0) {
      console.log("🌱 Seeding products from static data...");
      const products = [
        { name: "Mens Fancy Shirt", price: 1499, image: "/images/featured-img1.jpg", category: "men" },
        { name: "Polo T-Shirt Purple", price: 2999, image: "/images/featured-img2.jpg", category: "men" },
        { name: "Slim Fit Jeans", price: 2599, image: "/images/featured-img3.jpg", category: "men" },
        { name: "Casual Jeans", price: 1199, image: "/images/featured-img4.jpg", category: "men" },
        { name: "Mens Formal Combo", price: 3499, image: "/images/featured-img5.jpg", category: "men" },
        { name: "Mens Formal Shirt White", price: 799, image: "/images/featured-img6.jpg", category: "men" },
        { name: "Kids Graphic Tee", price: 499, image: "/images/twokids.jpg", category: "kids" },
        { name: "Mens Black Jeans", price: 399, image: "/images/mens-black-jeans.jpg", category: "men" },
        { name: "Denim Jeans", price: 399, image: "/images/denim-jeans-oversized.jpg", category: "men" },
        { name: "Black Jeans Slim Fit", price: 399, image: "/images/black-jeans-slimfit.jpg", category: "men" },
        { name: "Rugged Jeans Grey", price: 399, image: "/images/rugged-jeans.jpg", category: "men" },
        { name: "Mens Polo Tshirt Cream", price: 399, image: "/images/mens-polo-Tshirt Cream.jpg", category: "men" },
        { name: "Mens Polo Tshirt Pattern", price: 399, image: "/images/mens-polo-Tshirt Pattern.jpg", category: "men" },
        { name: "Mens Shirt Plain", price: 299, image: "/images/mens-shirt-plain.jpg", category: "men" },
        { name: "Mens Formal Shirt Gray", price: 499, image: "/images/mens-formalshirt-gray.jpg", category: "men" },
        { name: "Mens Fancy Shirt Stripes", price: 499, image: "/images/mens-fancyshirt-stripes.jpg", category: "men" },
        { name: "Mens Fancy Shirt Half", price: 399, image: "/images/mens-fancyshirt-half.jpg", category: "men" },
        { name: "Kids Fancy Tshirt Yellow", price: 399, image: "/images/kids-tshirt-yellow.jpg", category: "kids" },
        { name: "Kids Fancy Tshirt Cream", price: 399, image: "/images/kids-tshirt-cream.jpg", category: "kids" },
        { name: "Kids Tshirt Black", price: 399, image: "/images/kids-tshirt-black.jpg", category: "kids" },
        { name: "Kids Combo Tshirt+Shorts", price: 399, image: "/images/kids-combo-tshirt+shorts.jpg", category: "kids" },
        { name: "Kids Combo Green", price: 399, image: "/images/kids-combo-tshirt+shorts-green.jpg", category: "kids" },
        { name: "Kids Jeans Blue", price: 399, image: "/images/kids-jeans-blue.jpg", category: "kids" },
        { name: "Kids Jeans OverSized", price: 399, image: "/images/kids-jeans-oversized.jpg", category: "kids" },
        { name: "Leather Jacket Brown", price: 799, image: "/images/mens-jacket-leather-brown.jpg", category: "jackets" },
        { name: "Mens Black Jacket", price: 699, image: "/images/mens-jacket-black.jpg", category: "jackets" },
        { name: "Mens Cream Jacket", price: 699, image: "/images/mens-jacket-cream.jpg", category: "jackets" },
        { name: "Fancy Black Jacket", price: 699, image: "/images/mens-jacket-fancy-black.jpg", category: "jackets" },
        { name: "Mens Gray Jacket", price: 699, image: "/images/mens-jacket-gray.jpg", category: "jackets" },
      ];
      await Product.insertMany(products);
      console.log(`✅ ${products.length} products seeded successfully`);
    }
  } catch (error) {
    console.error("❌ Error seeding products:", error.message);
  }
};

module.exports = { seedAdmin, seedProducts };
