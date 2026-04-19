import axiosInstance from "./axiosInstance";

// Get all products (optional filters: ?category=men&search=shirt&sort=price_asc)
export const getProducts = (params) => axiosInstance.get("/products", { params });

// Get single product by ID
export const getProductById = (id) => axiosInstance.get(`/products/${id}`);
