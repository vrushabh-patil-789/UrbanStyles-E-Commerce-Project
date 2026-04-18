import axiosInstance from "./axiosInstance";

// Place a new order
export const placeOrder = (data) => axiosInstance.post("/orders", data);

// Get current user's orders
export const getMyOrders = () => axiosInstance.get("/orders/my");

// Get single order by ID
export const getOrderById = (id) => axiosInstance.get(`/orders/${id}`);
