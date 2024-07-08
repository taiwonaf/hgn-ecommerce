import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart, ICartProduct } from "./type";

const initialState: ICart = {
  cartItems: [],
  amount: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    clearCart: (state) => {
      state = initialState;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems?.forEach((item) => {
        amount += item.quantity;
        total += item.price * item.quantity;
      });
      state.amount = amount;
      state.total = total;
    },
    addToCart(state, action: PayloadAction<ICartProduct>) {
      state.cartItems.push(action.payload);
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.quantity;
        total += item.quantity * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.quantity;
        total += item.quantity * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
    editProductQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const existingProductIndex = state.cartItems.findIndex(
        (item) => item.id === id
      );
      if (existingProductIndex !== -1) {
        state.cartItems[existingProductIndex] = {
          ...state.cartItems[existingProductIndex],
          quantity: quantity,
        };
      }
    },
  },
});

export const {
  clearCart,
  addToCart,
  removeFromCart,
  editProductQuantity,
  calculateTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
