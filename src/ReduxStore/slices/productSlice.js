import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action to fetch data
export const fetchProduct = createAsyncThunk('product/fetchProduct', async () => {
  const response = await axios.get('https://api-test.innoloft.com/product/6781/');
  return response.data;
});

export const updateProduct = createAsyncThunk('product/updateProduct', async (product) => {
  const response = await axios.put(`https://api-test.innoloft.com/product/${product.id}/`, product);
  return response.data;
});

// Slice
const productSlice = createSlice({
  name: 'product',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export default productSlice.reducer;
