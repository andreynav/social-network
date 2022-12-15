import {createAsyncThunk, createSelector, createSlice} from "@reduxjs/toolkit"
import {userAPI} from "../api/api"
import {getRandomCity} from "../utils/getRandomCity";
import {RootState} from "./store";

type UserT = {
    followed: boolean
    id: number
    city: string
    name: string
    status: string | null
    uniqueUrlName: string | null
}

type InitialStateT = {
    users: Array<UserT>,
    currentPage: number,
    totalCount: number,
    usersOnPage: number,
    isFetching: boolean,
    followInProgress: Array<number>,
    error: string | null,
    status: string | null,
}

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
    async ({usersOnPage, page}: { usersOnPage: number, page: number }, {dispatch, rejectWithValue}) => {
        try {
            const data = await userAPI.getUsers(usersOnPage, page);
            if (data.error === null) {
                dispatch(setUsersAC({users: data.items}));
                dispatch(setTotalCountAC({totalCount: data.totalCount}));
            }
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)

export const toggleFollowUnfollow = createAsyncThunk(
    'users/toggleFollowUnfollow',
    async ({user, id}: { user: UserT, id: number }, {dispatch, rejectWithValue}) => {
        try {
            dispatch(setFollowInProgressAC({isInProgress: true, id}));
            const promise = user?.followed ? await userAPI.unfollowUser(id) : await userAPI.followUser(id);
            const data = await promise;
            if (data.resultCode === 0) {
                dispatch(changeToggleAC({userId: id}));
                dispatch(setFollowInProgressAC({isInProgress: false, id}));
            }
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)

const setError = (state: InitialStateT, action: any): void => {
    state.status = 'rejected';
    state.error = action.error.message;
    console.error(state.error);
}

const usersReducer = createSlice({
    name: 'users',
    initialState,
    reducers: {
        changeToggleAC(state: InitialStateT, action) {
            state.users.map(user => {
                if (user.id === action.payload.userId) {
                    user.followed = !user.followed
                }
            })
        },
        setUsersAC(state: InitialStateT, action) {
            state.users = [...action.payload.users]
            state.users.forEach(user => {
                user.city = getRandomCity()
            })
        },
        setCurrentPageAC(state: InitialStateT, action) {
            state.currentPage = action.payload.page;
        },
        setTotalCountAC(state: InitialStateT, action) {
            state.totalCount = action.payload.totalCount;
        },
        setFollowInProgressAC(state: InitialStateT, action) {
            state.followInProgress = action.payload.isInProgress
                ? [...state.followInProgress, action.payload.id]
                : state.followInProgress.filter(id => id !== action.payload.id);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.isFetching = true
                state.error = null
            })
            .addCase(getUsers.fulfilled, (state) => {
                state.isFetching = false
                state.error = null
            })
            .addCase(getUsers.rejected, (state, action) => {
                setError(state, action)
            })
            .addCase(toggleFollowUnfollow.pending, (state) => {
                state.error = null
            })
            .addCase(toggleFollowUnfollow.fulfilled, (state) => {
                state.error = null
            })
            .addCase(toggleFollowUnfollow.rejected, (state, action) => {
                setError(state, action)
            })
    }
})


export const selectUsers = createSelector(
    // fake selector for demonstrating cashing of createSelector functionality
    (state: RootState) => state.users.users,
    users => users.filter(user => true)
)

export const selectCurrentPage = (state: RootState) => state.users.currentPage;

export const selectTotalCount = (state: RootState) => state.users.totalCount;

export const selectUsersOnPage = (state: RootState) => state.users.usersOnPage;

export const selectIsFetching = (state: RootState) => state.users.isFetching;

export const selectFollowInProgress = (state: RootState) => state.users.followInProgress;

export const selectError = (state: RootState) => state.users.error;

export const {
    changeToggleAC,
    setUsersAC,
    setCurrentPageAC,
    setTotalCountAC,
    setFollowInProgressAC
} = usersReducer.actions;

export default usersReducer.reducer;
