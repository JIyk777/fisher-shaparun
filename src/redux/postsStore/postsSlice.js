import { createSlice } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  isLoading: false,
  posts: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    toggle(state, action) {
      state.isLoading = action.payload;
    },
    addNewFishing(state, action) {
      const index = state.posts.findIndex(
        elem => elem.id === action.payload.riverId
      );

      state.posts[index].fishing = [
        ...state.posts[index].fishing,
        action.payload.newFishing,
      ];
    },
    addNewPond(state, action) {
      state.posts = [...state.posts, action.payload];
    },
  },
});

const persistConfig = {
  key: 'fishing-shaparun/posts',
  storage,
};

export const persistedPostsReducer = persistReducer(
  persistConfig,
  postsSlice.reducer
);

export const postsReducer = postsSlice.reducer;
export const { toggle, addNewFishing, addNewPond } = postsSlice.actions;
