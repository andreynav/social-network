import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userAPI} from "../api/api";

export const setUsers = createAsyncThunk(
    'users/setUsers',
    async ({usersOnPage, page}, {dispatch, rejectWithValue}) => {
        try {
            const data = await userAPI.getUsers(usersOnPage, page);
            if (data.error === null) {
                dispatch(setUsersAC({users: data.items}));
                dispatch(setTotalCountAC({totalCount: data.totalCount}));
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const toggleFollowUnfollow = createAsyncThunk(
    'users/toggleFollowUnfollow',
    async ({user, id}, {dispatch, rejectWithValue}) => {
        try {
            dispatch(setFollowInProgressAC({isInProgress: true,  id}));
            const promise = user.followed ? await userAPI.unfollowUser(id) : await userAPI.followUser(id);
            const data = await promise;
            if (data.resultCode === 0) {
                dispatch(changeToggleAC({userId: id}));
                dispatch(setFollowInProgressAC({isInProgress: false, id}));
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

let initialState = {
    users: [],
    currentPage: 1,
    totalCount: 0,
    usersOnPage: 5,
    isFetching: false,
    followInProgress: [],
    error: null
};

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.error.message;
    console.error(state.error);
}

const usersReducer = createSlice({
    name: 'users',
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
            state.currentPage = action.payload.page;
        },
        setTotalCountAC(state, action) {
            state.totalCount = action.payload.totalCount;
        },
        setFollowInProgressAC(state, action) {
            state.followInProgress = action.payload.isInProgress
                ? [...state.followInProgress, action.payload.id]
                : state.followInProgress.filter(id => id !== action.payload.id);
        }
    },
    extraReducers: {
        [setUsers.pending]: (state) => {
            state.isFetching = true;
            state.error = null;
        },
        [setUsers.fulfilled]: (state) => {
            state.isFetching = false;
            state.error = null;
        },
        [setUsers.rejected]: setError,
        [toggleFollowUnfollow.pending]: (state) => {
            state.error = null;
        },
        [toggleFollowUnfollow.fulfilled]: (state) => {
            state.error = null;
        },
        [toggleFollowUnfollow.rejected]: setError,
    }
});

export const {changeToggleAC,
    setUsersAC,
    setCurrentPageAC,
    setTotalCountAC,
    setFollowInProgressAC} = usersReducer.actions;
export default usersReducer.reducer;
