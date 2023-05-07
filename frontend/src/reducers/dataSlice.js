import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  isLoading: true
};

export const dataSlice = createSlice({
  name: 'productData',
  initialState,
  reducers: {
    setProductData: (state, action) => {
      state.value = action.payload;
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProductData } = dataSlice.actions;

export default dataSlice.reducer;