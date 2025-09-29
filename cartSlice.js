import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalAmount: 0,
    isCartOpen: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) existing.quantity += 1;
      else state.items.push({ ...action.payload, quantity: 1 });
      state.totalAmount = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    },
    removeFromCart: (state, action) => {
      const existing = state.items.find(i => i.id === action.payload);
      if (existing && existing.quantity > 1) existing.quantity -= 1;
      else state.items = state.items.filter(i => i.id !== action.payload);
      state.totalAmount = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    },
    clearCart: state => {
      state.items = [];
      state.totalAmount = 0;
    },
    toggleCart: state => {
      state.isCartOpen = !state.isCartOpen;
    }
  }
});

export const { addToCart, removeFromCart, clearCart, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
