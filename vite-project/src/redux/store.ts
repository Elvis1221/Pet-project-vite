import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './posts.reducer';

const store = configureStore({
    reducer: {
        posts: postsReducer as any,
    },
});

export default store;
