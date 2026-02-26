import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: 0,
  cart1: 0,
  added: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state) => {
      state.cart += 1;
      state.cart1 += 1;
      state.added = true;
    },
    removeCart: (state) => {
      if (state.cart > 0) {
        state.cart -= 1;
        state.cart1 -= 1;
      }
      state.added = false;
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
