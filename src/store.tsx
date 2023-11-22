import { configureStore } from '@reduxjs/toolkit';
import queueReducer from './Queue/queueSlice';
import { queueApi } from './services/queueApi';

export const store = configureStore({
  reducer: {
    queue: queueReducer,
    [queueApi.reducerPath]: queueApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(queueApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
