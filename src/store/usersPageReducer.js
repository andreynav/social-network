import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    users: [],
    currentPage: 1,
    totalCount: 0,
    usersOnPage: 5,
    isFetching: false,
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
            state.users = [...action.payload.users]
        },
        setCurrentPageAC(state, action) {
            state.currentPage = action.payload.currentPage;
        },
        setTotalCountAC(state, action) {
            state.totalCount = action.payload.totalCount;
        },
        setIsFetchingAC(state, action) {
            state.isFetching = action.payload.isFetching;
        }
    }
});

export const {changeToggleAC, setUsersAC, setCurrentPageAC, setTotalCountAC, setIsFetchingAC} = usersPageSlice.actions;
export default usersPageSlice.reducer;
