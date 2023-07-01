// src/redux/configSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appId = process.env.REACT_APP_APP_ID;

// Async action to fetch data
export const fetchConfig = createAsyncThunk('config/fetchConfig', async () => {
  const appIdReq = appId || 1; // Change this to read from your .env file.
  const response = await axios.get(`https://api-test.innoloft.com/configuration/${appIdReq}/`);
  return response.data;
});

// Slice
const configSlice = createSlice({
  name: 'config',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchConfig.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default configSlice.reducer;
