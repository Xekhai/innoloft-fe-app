import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import trlReducer from './slices/trlSlice';
import configReducer from './slices/configSlice';

export default configureStore({
  reducer: {
    product: productReducer,
    trl: trlReducer,
    config: configReducer,
  },
});
