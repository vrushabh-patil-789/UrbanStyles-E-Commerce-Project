const Product = require("../models/product.model");

// @route  GET /api/products
// @desc   Get all products (with optional category filter & search)
// @access Public
const getAllProducts = async (req, res) => {
  try {
    const { category, search, sort } = req.query;
    const filter = {};

    if (category) filter.category = category;
    if (search) filter.name = { $regex: search, $options: "i" };

    let query = Product.find(filter);

    if (sort === "price_asc") query = query.sort({ price: 1 });
    else if (sort === "price_desc") query = query.sort({ price: -1 });
    else query = query.sort({ createdAt: -1 });

    const products = await query;
    res.status(200).json({ count: products.length, products });
  } catch (error) {
    res.status(500).json({ message: "Server error.", error: error.message });
  }
};

// @route  GET /api/products/:id
// @desc   Get single product by ID
// @access Public
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found." });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error.", error: error.message });
  }
};

// @route  POST /api/products
// @desc   Create a new product (Admin only)
// @access Private/Admin
const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, image, stock } = req.body;
    if (!name || !price || !category) {
      return res.status(400).json({ message: "Name, price, and category are required." });
    }
    const product = await Product.create({ name, description, price, category, image, stock });
    res.status(201).json({ message: "Product created successfully.", product });
  } catch (error) {
    res.status(500).json({ message: "Server error.", error: error.message });
  }
};

// @route  PUT /api/products/:id
// @desc   Update a product (Admin only)
// @access Private/Admin
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) return res.status(404).json({ message: "Product not found." });
    res.status(200).json({ message: "Product updated.", product });
  } catch (error) {
    res.status(500).json({ message: "Server error.", error: error.message });
  }
};

// @route  DELETE /api/products/:id
// @desc   Delete a product (Admin only)
// @access Private/Admin
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found." });
    res.status(200).json({ message: "Product deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Server error.", error: error.message });
  }
};

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
