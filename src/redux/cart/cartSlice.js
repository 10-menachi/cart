import { createSlice } from '@reduxjs/toolkit';
import { cartItems } from '../../utils';

const initialState = {
  items: cartItems,
  quantity: 0,
  total: 0,
  isLoading: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => ({ ...state, items: [] }),
    removeItem: (state, action) => ({
      ...state,
      items: state.items.filter((item) => item.id !== action.payload),
    }),
    increase: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      item.amount += 1;
    },
    decrease: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      item.amount -= 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.items.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      return {
        ...state,
        quantity: amount,
        total,
      };
    },
  },
});

const cartReducer = cartSlice.reducer;
export default cartReducer;
export const {
  clearCart, removeItem, increase, decrease, calculateTotals,
} = cartSlice.actions;
