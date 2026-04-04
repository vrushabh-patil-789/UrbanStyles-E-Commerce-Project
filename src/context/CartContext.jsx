import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {

    case "ADD_TO_CART": {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        // If already in cart, just increase quantity
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Otherwise add fresh with quantity 1
      return [...state, { ...action.payload, quantity: 1 }];
    }

    case "INCREASE_QTY":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREASE_QTY":
      return state
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // auto-remove if qty hits 0

    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product) =>
    dispatch({ type: "ADD_TO_CART", payload: product });

  const increaseQty = (id) =>
    dispatch({ type: "INCREASE_QTY", payload: id });

  const decreaseQty = (id) =>
    dispatch({ type: "DECREASE_QTY", payload: id });

  const removeItem = (id) =>
    dispatch({ type: "REMOVE_ITEM", payload: id });

  const clearCart = () =>
    dispatch({ type: "CLEAR_CART" });

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook for easy usage
export function useCart() {
  return useContext(CartContext);
}