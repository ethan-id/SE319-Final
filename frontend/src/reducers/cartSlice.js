import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value[state.value.length] = action.payload
    },
    removeFromCart: (state, action) => {
      state.value = state.value.filter((product) => 
        product.product_name != action.payload.product_name
      )
    },
    emptyCart: (state) => {
        state.value = []
    }
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;