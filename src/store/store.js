import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { rankingSlice } from './ranking/rankingSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ranking: rankingSlice.reducer
  },


});
