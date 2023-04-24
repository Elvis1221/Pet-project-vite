import { PostFormValues } from '../pages/Posts/PostFormFieldsArr';

export const ADD_POST = 'ADD_POST';

export interface PostsState {
    posts: PostFormValues[];
}

const initialState: PostsState = {
    posts: [],
};

export interface AddPostAction {
    type: typeof ADD_POST;
    payload: PostFormValues;
}

const postsReducer = (state = initialState, action: AddPostAction): PostsState => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };
        default:
            return state;
    }
};

export const addPost = (post: PostFormValues): AddPostAction => ({
    type: ADD_POST,
    payload: post,
});

export default postsReducer;
