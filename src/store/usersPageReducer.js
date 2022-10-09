import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    users: [],
    currentPage: 1,
    totalCount: 0,
    usersOnPage: 5,
    isFetching: false,
    followInProgress: []
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
        },
        setFollowInProgressAC(state, action) {
            state.followInProgress = action.payload.isInProgress
                ? [...state.followInProgress, action.payload.id]
                : state.followInProgress.filter(id => id !== action.payload.id);
        }
    }
});

export const {changeToggleAC,
    setUsersAC,
    setCurrentPageAC,
    setTotalCountAC,
    setIsFetchingAC,
    setFollowInProgressAC} = usersPageSlice.actions;
export default usersPageSlice.reducer;
