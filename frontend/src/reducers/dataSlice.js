import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  isLoading: true,
  originalData: []
};

export const dataSlice = createSlice({
  name: 'productData',
  initialState,
  reducers: {
    setProductData: (state, action) => {
      if (state.value.length === 0) {
        state.originalData = action.payload;
      }
      state.value = action.payload;
      state.isLoading = false;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setProductData } = dataSlice.actions;

export default dataSlice.reducer;