import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.card.info.id
      );
      console.log(state.items);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        state.items.push(newItem);
      }
      state.totalQuantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity -= 1;
        state.totalQuantity -= 1;
      }
    },
    removeItem: (state, action) => {
      const newCartItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );

      state.totalQuantity -= action.payload.quantity;
      state.items = newCartItems;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
    },
    getTotalAmount: (state, action) => {
      const total = state.items.reduce((cartTotal, cartItem) => {
        const { price, quantity } = cartItem;
        cartTotal += quantity * price;
        return cartTotal;
      }, 0);
      state.totalAmount = total;
    },
  },
});

export const {
  addItem,
  removeItem,
  decreaseQuantity,
  clearCart,
  getTotalAmount,
} = CartSlice.actions;

export default CartSlice.reducer;
