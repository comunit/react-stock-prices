import { configureStore } from '@reduxjs/toolkit';
import stockReducer from '../features/stocks/stockSlice';

export const store = configureStore({
  reducer: {
    stock: stockReducer,
  },
});
