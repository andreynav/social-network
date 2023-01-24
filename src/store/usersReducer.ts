import {
	PayloadAction,
	createAsyncThunk,
	createSelector,
	createSlice
} from '@reduxjs/toolkit'

import {
	FollowUserUnfollowUserUserAPI,
	GetUsersAPI,
	ResultCodes,
	userAPI
} from '../api/api'
import { ThunkAPI } from '../types/reducers'
import { CityT, getRandomCity } from '../utils/getRandomCity'
import { isActionError } from '../utils/isActionError'
import { RootState } from './store'

export type GetUsersT = {
	usersOnPage: number
	page: number
}

export type UserT = {
	followed: boolean
	id: number
	city: CityT
	name: string
	status: string | ''
	uniqueUrlName?: string | null
}

export type ToggleFollowUnfollowT = {
	user: UserT
	id: number
}

type SetFollowInProgressT = {
	isInProgress: boolean
	id: number
}

type InitialStateT = {
	users: Array<UserT>
	currentPage: number
	totalCount: number
	usersOnPage: number
	isFetching: boolean
	followInProgress: Array<number>
	error: string | undefined
	status: string | null
}

const initialState: InitialStateT = {
	users: [],
	currentPage: 1,
	totalCount: 0,
	usersOnPage: 5,
	isFetching: false,
	followInProgress: [],
	error: '',
	status: null
}

export const getUsers = createAsyncThunk<void, GetUsersT, ThunkAPI>(
	'users/getUsers',
	async ({ usersOnPage, page }, { dispatch, rejectWithValue }) => {
		const data: GetUsersAPI = await userAPI.getUsers(usersOnPage, page)
		if (data.error === null) {
			dispatch(setUsersAC(data.items))
			dispatch(setTotalCountAC(data.totalCount))
		} else {
			return rejectWithValue(data.error)
		}
	}
)

export const toggleFollowUnfollow = createAsyncThunk<
	void,
	ToggleFollowUnfollowT,
	ThunkAPI
>(
	'users/toggleFollowUnfollow',
	async ({ user, id }, { dispatch, rejectWithValue }) => {
		dispatch(setFollowInProgressAC({ isInProgress: true, id }))
		const promise: FollowUserUnfollowUserUserAPI = user?.followed
			? await userAPI.unfollowUser(id)
			: await userAPI.followUser(id)
		const data = await promise
		if (data.resultCode === ResultCodes.SUCCESS) {
			dispatch(changeToggleAC(id))
			dispatch(setFollowInProgressAC({ isInProgress: false, id }))
		}
		if (data.resultCode === ResultCodes.ERROR) {
			return rejectWithValue(data.messages[0])
		}
	}
)

const usersReducer = createSlice({
	name: 'users',
	initialState,
	reducers: {
		changeToggleAC(state, action: PayloadAction<number>) {
			state.users.map((user) => {
				if (user.id === action.payload) {
					user.followed = !user.followed
				}
			})
		},
		setUsersAC(state, action: PayloadAction<Array<UserT>>) {
			state.users = [...action.payload]
			state.users.forEach((user) => {
				user.city = getRandomCity()
			})
		},
		setCurrentPageAC(state, action: PayloadAction<number>) {
			state.currentPage = action.payload
		},
		setTotalCountAC(state, action: PayloadAction<number>) {
			state.totalCount = action.payload
		},
		setFollowInProgressAC(state, action: PayloadAction<SetFollowInProgressT>) {
			state.followInProgress = action.payload.isInProgress
				? [...state.followInProgress, action.payload.id]
				: state.followInProgress.filter((id) => id !== action.payload.id)
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getUsers.pending, (state) => {
				state.isFetching = true
				state.error = ''
			})
			.addCase(getUsers.fulfilled, (state) => {
				state.isFetching = false
				state.error = ''
			})
			.addCase(toggleFollowUnfollow.pending, (state) => {
				state.error = ''
			})
			.addCase(toggleFollowUnfollow.fulfilled, (state) => {
				state.error = ''
			})
			.addMatcher(isActionError, (state, action: PayloadAction<string>) => {
				state.error = action.payload
				console.error(state.error)
			})
	}
})

export const selectUsers = createSelector(
	// fake selector for demonstrating cashing of createSelector functionality
	(state: RootState) => state.users.users,
	(users) => users.filter((user) => true)
)

export const selectCurrentPage = (state: RootState) => state.users.currentPage

export const selectTotalCount = (state: RootState) => state.users.totalCount

export const selectUsersOnPage = (state: RootState) => state.users.usersOnPage

export const selectIsFetching = (state: RootState) => state.users.isFetching

export const selectFollowInProgress = (state: RootState) =>
	state.users.followInProgress

export const selectError = (state: RootState) => state.users.error

export const {
	changeToggleAC,
	setUsersAC,
	setCurrentPageAC,
	setTotalCountAC,
	setFollowInProgressAC
} = usersReducer.actions

export const userReducers = usersReducer.reducer
