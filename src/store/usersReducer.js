import {createAsyncThunk, createSelector, createSlice} from "@reduxjs/toolkit"
import {userAPI} from "../api/api"
import {getRandomCity} from "../utils/getRandomCity";

let initialState = {
    users: [],
    currentPage: 1,
    totalCount: 0,
    usersOnPage: 5,
    isFetching: false,
    followInProgress: [],
    error: null,
    status: null,
}

export const getUsers = createAsyncThunk(
    'users/getUsers',
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
)

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
)

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
            state.users.forEach(user => {user.city = getRandomCity()})
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
        [getUsers.pending]: (state) => {
            state.isFetching = true;
            state.error = null;
        },
        [getUsers.fulfilled]: (state) => {
            state.isFetching = false;
            state.error = null;
        },
        [getUsers.rejected]: setError,
        [toggleFollowUnfollow.pending]: (state) => {
            state.error = null;
        },
        [toggleFollowUnfollow.fulfilled]: (state) => {
            state.error = null;
        },
        [toggleFollowUnfollow.rejected]: setError,
    }
})


export const selectUsers = createSelector(
    // fake selector for demonstrating cashing of createSelector functionality
    state => state.users.users,
    users => users.filter(user => true)
)

export const selectCurrentPage = state => state.users.currentPage;

export const selectTotalCount = state => state.users.totalCount;

export const selectUsersOnPage = state => state.users.usersOnPage;

export const selectIsFetching = state => state.users.isFetching;

export const selectFollowInProgress = state => state.users.followInProgress;

export const selectError = state => state.users.error;

export const {
    changeToggleAC,
    setUsersAC,
    setCurrentPageAC,
    setTotalCountAC,
    setFollowInProgressAC} = usersReducer.actions;

export default usersReducer.reducer;
