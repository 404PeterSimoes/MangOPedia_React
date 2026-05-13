import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './api/baseApi';

export const store = configureStore({
  reducer: {
    [baseApi.reducer]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
