import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './posts.reducer';
import usersReducer from "./users.reducer";

const store = configureStore({
    reducer: {
        posts: postsReducer as any,
        users: usersReducer as any,
    },
});

export default store;
