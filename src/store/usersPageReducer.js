import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    users: []
};

const usersPageSlice = createSlice({
    name: 'usersPage',
    initialState,
    reducers: {
        changeToggleAC(state, action) {
            state.users.map(user => {
                if (user.id === action.payload.userId) {
                    user.followed = !user.followed
                }
            })
        },
        setUsersAC(state, action) {
            state.users = [...state.users, ...action.payload.users]
        }
    }
});

export const {changeToggleAC, setUsersAC} = usersPageSlice.actions;
export default usersPageSlice.reducer;
