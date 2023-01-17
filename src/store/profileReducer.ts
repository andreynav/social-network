import {
	AnyAction,
	PayloadAction,
	createAsyncThunk,
	createSlice
} from '@reduxjs/toolkit'

import { profileAPI } from '../api/api'
import { ThunkAPI } from '../types/reducers'
import { getRandomLike } from '../utils/getRandomLike'
import { isActionError } from '../utils/isActionError'
import { RootState } from './store'

export type PostT = {
	id: number
	message: string
	like: number
}

export type PhotosT = {
	large: string | null
	small: string | null
}

export type ContactsT = {
	facebook: string | null
	github: string | null
	instagram: string | null
	mainLink: string | null
	twitter: string | null
	vk: string | null
	website: string | null
	youtube: string | null
}

export type ProfileInfoT = {
	aboutMe: string | null
	fullName: string
	lookingForAJob: boolean
	lookingForAJobDescription: string | null
	userId: number
	photos: PhotosT
	contacts: ContactsT
}

type InitialStateT = {
	myPosts: Array<PostT>
	profileInfo: ProfileInfoT | null
	profileStatus: string | null
	profileInfoStatus: 'pending' | 'resolved' | 'rejected' | null
	profileInfoError: string | null
	profileInfoUpdateStatus: string | null
	profileInfoUpdateError: string | null
}

const initialState: InitialStateT = {
	myPosts: [
		{ id: 1, message: 'Hey, how are you?', like: 105 },
		{ id: 2, message: 'You shell not pass, fellow!', like: 304 },
		{ id: 3, message: "It's my life", like: 118 },
		{ id: 4, message: "Nice day, let's learn React", like: 257 }
	],
	profileInfo: null,
	profileStatus: null,
	profileInfoStatus: null,
	profileInfoError: null,
	profileInfoUpdateStatus: null,
	profileInfoUpdateError: null
}

export const getProfileInfo = createAsyncThunk<void, number, ThunkAPI>(
	'profile/getProfileInfo',
	async (userId, { dispatch }) => {
		const data = await profileAPI.getProfileInfo(userId)
		dispatch(setProfileInfoAC({ profileInfo: data }))
	}
)

export const getProfileStatus = createAsyncThunk<void, number, ThunkAPI>(
	'profile/getProfileStatus',
	async (userId, { dispatch }) => {
		const data = await profileAPI.getProfileStatus(userId)
		dispatch(setProfileStatusAC({ profileStatus: data }))
	}
)

export const updateProfileStatus = createAsyncThunk<void, string, ThunkAPI>(
	'profile/updateProfileStatus',
	async (status, { dispatch, rejectWithValue }) => {
		const data = await profileAPI.updateProfileStatus(status)
		if (data.resultCode === 0) {
			dispatch(setProfileStatusAC({ profileStatus: status }))
		} else {
			return rejectWithValue(data.error)
		}
	}
)

export const updateProfilePhoto = createAsyncThunk<void, unknown, ThunkAPI>(
	'profile/updateProfilePhoto',
	async (file, { dispatch, rejectWithValue }) => {
		const data = await profileAPI.updateProfilePhoto(file)
		if (data.resultCode === 0) {
			dispatch(setProfilePhotoAC({ photos: data.data.photos }))
		} else {
			return rejectWithValue(data.error)
		}
	}
)

export const updateProfileInfo = createAsyncThunk<void, ProfileInfoT, ThunkAPI>(
	'profile/updateProfileInfo',
	async (profile, { dispatch, getState, rejectWithValue }) => {
		const data = await profileAPI.updateProfileInfo(profile)
		if (data.resultCode === 0) {
			dispatch(getProfileInfo(getState().auth.id!))
		} else {
			return rejectWithValue(data.error)
		}
	}
)

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		addNewPostAC(state, action) {
			let postId = state.myPosts.length

			const post = {
				id: ++postId,
				message: action.payload,
				like: getRandomLike(400)
			}
			state.myPosts = [...state.myPosts, post]
		},
		setProfileInfoAC(state, action) {
			state.profileInfo = action.payload.profileInfo
		},
		setProfileStatusAC(state, action) {
			state.profileStatus = action.payload.profileStatus
		},
		setProfilePhotoAC(state, action) {
			state.profileInfo!.photos = action.payload.photos
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProfileInfo.pending, (state) => {
				state.profileInfoStatus = 'pending'
				state.profileInfoError = null
			})
			.addCase(getProfileInfo.fulfilled, (state) => {
				state.profileInfoStatus = 'resolved'
				state.profileInfoError = null
			})
			.addCase(getProfileInfo.rejected, (state, action: AnyAction) => {
				state.profileInfoStatus = 'rejected'
				state.profileInfoError = action.error.message
				console.error(state.profileInfoError)
			})
			.addCase(getProfileStatus.pending, (state) => {})
			.addCase(getProfileStatus.fulfilled, (state, action) => {})
			.addCase(updateProfileStatus.pending, (state) => {})
			.addCase(updateProfileStatus.fulfilled, (state, action) => {})
			.addCase(updateProfilePhoto.pending, (state) => {})
			.addCase(updateProfilePhoto.fulfilled, (state, action) => {})
			.addCase(updateProfileInfo.pending, (state) => {
				state.profileInfoUpdateStatus = 'pending'
				state.profileInfoUpdateError = null
			})
			.addCase(updateProfileInfo.fulfilled, (state) => {
				state.profileInfoUpdateStatus = 'resolved'
				state.profileInfoUpdateError = null
			})
			.addCase(updateProfileInfo.rejected, (state, action: AnyAction) => {
				state.profileInfoUpdateStatus = 'rejected'
				state.profileInfoUpdateError = action.payload
			})
			.addMatcher(isActionError, (state, action: PayloadAction<string>) => {
				state.profileInfoError = action.payload
				console.error(state.profileInfoError)
			})
	}
})

export const selectMyPosts = (state: RootState) => state.profile.myPosts

export const selectProfileInfo = (state: RootState) => state.profile.profileInfo

export const selectProfileInfoStatus = (state: RootState) =>
	state.profile.profileInfoStatus

export const selectProfileInfoError = (state: RootState) =>
	state.profile.profileInfoError

export const selectProfileStatus = (state: RootState) =>
	state.profile.profileStatus

export const selectProfileInfoUpdateStatus = (state: RootState) =>
	state.profile.profileInfoUpdateStatus

export const selectProfileInfoUpdateError = (state: RootState) =>
	state.profile.profileInfoUpdateError

export const {
	addNewPostAC,
	setProfileInfoAC,
	setProfileStatusAC,
	setProfilePhotoAC
} = profileSlice.actions

export const profileReducers = profileSlice.reducer
