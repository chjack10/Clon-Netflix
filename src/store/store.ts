import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import dataSlice from '../features/data/dataSlice';
import { tmdbApi } from '../services/services';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    data: dataSlice,
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
