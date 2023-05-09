import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {},
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setActiveProduct: (state, action) => {
      state.value = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { setActiveProduct } = productSlice.actions;

export default productSlice.reducer;