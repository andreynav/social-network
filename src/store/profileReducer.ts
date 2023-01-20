import {
	AnyAction,
	PayloadAction,
	createAsyncThunk,
	createSlice
} from '@reduxjs/toolkit'

import {
	GetProfileInfoAPI,
	ResultCodes,
	UpdateProfileInfoAPI,
	UpdateProfilePhotoAPI,
	UpdateProfileStatusAPI,
	profileAPI
} from '../api/api'
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
		const data: GetProfileInfoAPI = await profileAPI.getProfileInfo(userId)
		dispatch(setProfileInfoAC(data))
	}
)

export const getProfileStatus = createAsyncThunk<void, number, ThunkAPI>(
	'profile/getProfileStatus',
	async (userId, { dispatch }) => {
		const data: string = await profileAPI.getProfileStatus(userId)
		dispatch(setProfileStatusAC(data))
	}
)

export const updateProfileStatus = createAsyncThunk<void, string, ThunkAPI>(
	'profile/updateProfileStatus',
	async (status, { dispatch, rejectWithValue }) => {
		const data: UpdateProfileStatusAPI = await profileAPI.updateProfileStatus(
			status
		)
		if (data.resultCode === ResultCodes.SUCCESS) {
			dispatch(setProfileStatusAC(status))
		}
		if (data.resultCode === ResultCodes.ERROR) {
			return rejectWithValue(data.messages[0])
		}
	}
)

export const updateProfilePhoto = createAsyncThunk<void, File, ThunkAPI>(
	'profile/updateProfilePhoto',
	async (file, { dispatch, rejectWithValue }) => {
		const data: UpdateProfilePhotoAPI = await profileAPI.updateProfilePhoto(
			file
		)
		if (data.resultCode === ResultCodes.SUCCESS) {
			dispatch(setProfilePhotoAC(data.data.photos))
		}
		if (data.resultCode === ResultCodes.ERROR) {
			return rejectWithValue(data.messages[0])
		}
	}
)

export const updateProfileInfo = createAsyncThunk<void, ProfileInfoT, ThunkAPI>(
	'profile/updateProfileInfo',
	async (profile, { dispatch, getState, rejectWithValue }) => {
		const data: UpdateProfileInfoAPI = await profileAPI.updateProfileInfo(
			profile
		)
		if (data.resultCode === ResultCodes.SUCCESS) {
			dispatch(getProfileInfo(getState().auth.id!))
		}
		if (data.resultCode === ResultCodes.ERROR) {
			return rejectWithValue(data.messages[0])
		}
	}
)

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		addNewPostAC: {
			reducer: (state, action: PayloadAction<PostT>) => {
				state.myPosts = [...state.myPosts, action.payload]
			},
			prepare: (message) => {
				let postId = initialState.myPosts.length

				return {
					payload: {
						id: ++postId,
						message: message,
						like: getRandomLike(400)
					}
				}
			}
		},
		setProfileInfoAC(state, action: PayloadAction<ProfileInfoT>) {
			state.profileInfo = action.payload
		},
		setProfileStatusAC(state, action: PayloadAction<string>) {
			state.profileStatus = action.payload
		},
		setProfilePhotoAC(state, action: PayloadAction<PhotosT>) {
			state.profileInfo!.photos = action.payload
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
			.addCase(getProfileStatus.pending, (state) => {
				state.profileInfoStatus = 'pending'
				state.profileInfoError = null
			})
			.addCase(getProfileStatus.fulfilled, (state) => {
				state.profileInfoStatus = 'resolved'
				state.profileInfoError = null
			})
			.addCase(updateProfileStatus.pending, (state) => {
				state.profileInfoStatus = 'pending'
				state.profileInfoError = null
			})
			.addCase(updateProfileStatus.fulfilled, (state) => {
				state.profileInfoStatus = 'resolved'
				state.profileInfoError = null
			})
			.addCase(updateProfilePhoto.pending, (state) => {
				state.profileInfoStatus = 'pending'
				state.profileInfoError = null
			})
			.addCase(updateProfilePhoto.fulfilled, (state) => {
				state.profileInfoStatus = 'resolved'
				state.profileInfoError = null
			})
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
