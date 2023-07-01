// src/redux/trlSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action to fetch data
export const fetchTrl = createAsyncThunk('trl/fetchTrl', async () => {
  const response = await axios.get('https://api-test.innoloft.com/trl/');
  return response.data;
});

// Slice
const trlSlice = createSlice({
  name: 'trl',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTrl.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default trlSlice.reducer;
