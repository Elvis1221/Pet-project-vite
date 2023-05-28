export const GET_USER_DATA = 'GET_USER_DATA';

export interface User {
    id: number;
    name: string;
    email: string;
}

export interface UsersState {
    users: User[];
}


const initialState: UsersState = {
    users: [],
};

export interface GetUserAction {
    type: typeof GET_USER_DATA;
    payload: User;
}

const usersReducer = (state = initialState, action: GetUserAction): UsersState => {
    switch (action.type) {
        case GET_USER_DATA:
            return <UsersState>{
                ...state,
                users: [...state.users, action.payload],
            };
        default:
            return state;
    }
};

export const getUsersData = (user: User[]): { payload: User[]; type: string } => ({
    type: GET_USER_DATA,
    payload: user,
});

export default usersReducer;
