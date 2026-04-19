const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");
const { protect, adminOnly } = require("../middleware/auth.middleware");

// GET /api/products          - Public (supports ?category=men&search=shirt&sort=price_asc)
router.get("/", getAllProducts);

// GET /api/products/:id      - Public
router.get("/:id", getProductById);

// POST /api/products         - Admin only
router.post("/", protect, adminOnly, createProduct);

// PUT /api/products/:id      - Admin only
router.put("/:id", protect, adminOnly, updateProduct);

// DELETE /api/products/:id   - Admin only
router.delete("/:id", protect, adminOnly, deleteProduct);

module.exports = router;
