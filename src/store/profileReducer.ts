import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { profileAPI } from '../api/api'
import { getRandomLike } from '../utils/getRandomLike'
import { RootState } from './store'

type PostT = {
	id: number
	message: string
	like: number
}

type PhotosT = {
	large: string | null
	small: string | null
}

type ContactsT = {
	facebook: string | null
	github: string | null
	instagram: string | null
	mainLink: string | null
	twitter: string | null
	vk: string | null
	website: string | null
	youtube: string | null
}

type ProfileInfoT = {
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
	profileInfoLoadingStatus: string | null
	profileInfoLoadingError: any
	profileInfoUpdateStatus: string | null
	profileInfoUpdateError: any
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
	profileInfoLoadingStatus: null,
	profileInfoLoadingError: null,
	profileInfoUpdateStatus: null,
	profileInfoUpdateError: null
}

export const getProfileInfo = createAsyncThunk(
	'profile/getProfileInfo',
	async (userId: number, { dispatch, rejectWithValue }) => {
		try {
			const data = await profileAPI.getProfileInfo(userId)
			dispatch(setProfileInfoAC({ profileInfo: data }))
		} catch (error: any) {
			return rejectWithValue(error.message)
		}
	}
)

export const getProfileStatus = createAsyncThunk(
	'profile/getProfileStatus',
	async (userId: number, { dispatch, rejectWithValue }) => {
		try {
			const data = await profileAPI.getProfileStatus(userId)
			dispatch(setProfileStatusAC({ profileStatus: data }))
		} catch (error: any) {
			return rejectWithValue(error.message)
		}
	}
)

export const updateProfileStatus = createAsyncThunk(
	'profile/updateProfileStatus',
	async (status: string, { dispatch, rejectWithValue }) => {
		try {
			const data = await profileAPI.updateProfileStatus(status)
			if (data.resultCode === 0) {
				dispatch(setProfileStatusAC({ profileStatus: status }))
			}
		} catch (error: any) {
			return rejectWithValue(error.message)
		}
	}
)

export const updateProfilePhoto = createAsyncThunk(
	'profile/updateProfilePhoto',
	async (file: any, { dispatch, rejectWithValue }) => {
		try {
			const data = await profileAPI.updateProfilePhoto(file)
			if (data.resultCode === 0) {
				dispatch(setProfilePhotoAC({ photos: data.data.photos }))
			}
		} catch (error: any) {
			return rejectWithValue(error.message)
		}
	}
)

export const updateProfileInfo = createAsyncThunk<
	object,
	ProfileInfoT,
	{ state: RootState }
>(
	'profile/updateProfileInfo',
	async (profile: ProfileInfoT, { dispatch, getState, rejectWithValue }) => {
		try {
			const data = await profileAPI.updateProfileInfo(profile)
			if (data.resultCode === 0) {
				dispatch(getProfileInfo(getState().auth.id!))
			} else {
				throw new Error(data.messages[0])
				return await Promise.reject()
			}
		} catch (error: any) {
			return rejectWithValue(error.message)
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
				message: action.payload.message,
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
				state.profileInfoLoadingStatus = 'pending'
				state.profileInfoLoadingError = null
			})
			.addCase(getProfileInfo.fulfilled, (state) => {
				state.profileInfoLoadingStatus = 'resolved'
				state.profileInfoLoadingError = null
			})
			.addCase(getProfileInfo.rejected, (state, action) => {
				state.profileInfoLoadingStatus = 'rejected'
				state.profileInfoLoadingError = action.error.message
				console.error(state.profileInfoLoadingError)
			})
			.addCase(getProfileStatus.pending, (state) => {})
			.addCase(getProfileStatus.fulfilled, (state, action) => {})
			.addCase(getProfileStatus.rejected, (state, action) => {})
			.addCase(updateProfileStatus.pending, (state) => {})
			.addCase(updateProfileStatus.fulfilled, (state, action) => {})
			.addCase(updateProfileStatus.rejected, (state, action) => {})
			.addCase(updateProfilePhoto.pending, (state) => {})
			.addCase(updateProfilePhoto.fulfilled, (state, action) => {})
			.addCase(updateProfilePhoto.rejected, (state, action) => {})
			.addCase(updateProfileInfo.pending, (state) => {
				state.profileInfoUpdateStatus = 'pending'
				state.profileInfoUpdateError = null
			})
			.addCase(updateProfileInfo.fulfilled, (state) => {
				state.profileInfoUpdateStatus = 'resolved'
				state.profileInfoUpdateError = null
			})
			.addCase(updateProfileInfo.rejected, (state, action) => {
				state.profileInfoUpdateStatus = 'rejected'
				state.profileInfoUpdateError = action.payload
			})
	}
})

export const selectMyPosts = (state: RootState) => state.profile.myPosts

export const selectProfileInfo = (state: RootState) => state.profile.profileInfo

export const selectProfileInfoLoadingStatus = (state: RootState) =>
	state.profile.profileInfoLoadingStatus

export const selectProfileInfoLoadingError = (state: RootState) =>
	state.profile.profileInfoLoadingError

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

export default profileSlice.reducer
