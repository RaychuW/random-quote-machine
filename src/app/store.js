import { configureStore } from '@reduxjs/toolkit';
import quoteSlice from '../features/quote/quoteSlice';

export const store = configureStore({
  reducer: {
    quote: quoteSlice,
  },
});
