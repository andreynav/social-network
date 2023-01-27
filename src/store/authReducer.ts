import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import {
	GetCaptchaURL,
	LoginLogoutAPI,
	MeAPI,
	ResultCodes,
	authAPI,
	securityAPI
} from '../api/api'
import { ThunkAPI } from '../types/reducers'
import { isActionError } from '../utils/isActionError'
import { RootState } from './store'

export type UserNameOrNullT = string | null
export type IdOrNullT = number | null
export type CaptchaOrNull = string | null

export type AuthDataT = {
	email: string
	password: string
	rememberMe: boolean
	captcha?: CaptchaOrNull
}

type SetAuthDataT = {
	id: IdOrNullT
	userName: UserNameOrNullT
	email: string | null
}

type SetLoginDataT = {
	id: IdOrNullT
	isAuth: boolean
}

type InitialStateT = {
	id: IdOrNullT
	userName: UserNameOrNullT
	email: string | null
	isAuth: boolean
	captcha: CaptchaOrNull
	status: string | null
	error: string | null
}

const initialState: InitialStateT = {
	id: null,
	userName: null,
	email: null,
	isAuth: false,
	captcha: null,
	status: null,
	error: null
}

export const getAuthUserData = createAsyncThunk<void, undefined, ThunkAPI>(
	'auth/getAuthUserData',
	async (_, { dispatch, rejectWithValue }) => {
		const data: MeAPI = await authAPI.me()
		const { id, login: userName, email } = data.data
		if (data.resultCode === ResultCodes.SUCCESS) {
			dispatch(authActions.setAuthDataAC({ id, userName, email }))
		}
		if (data.resultCode === ResultCodes.ERROR) {
			return rejectWithValue(data.messages[0])
		}
	}
)

export const loginUser = createAsyncThunk<void, AuthDataT, ThunkAPI>(
	'auth/login',
	async (
		{ email, password, rememberMe, captcha },
		{ dispatch, rejectWithValue }
	) => {
		const data: LoginLogoutAPI = await authAPI.login({
			email,
			password,
			rememberMe,
			captcha
		})
		if (data.resultCode === ResultCodes.SUCCESS) {
			dispatch(getAuthUserData())
		}
		if (data.resultCode === ResultCodes.CAPTCHA_REQUIRED) {
			dispatch(getCaptchaURL())
			dispatch(authActions.setLoginDataAC({ id: null, isAuth: false }))
			dispatch(authActions.setCaptchaAC({ url: null }))
		}
		if (data.resultCode === ResultCodes.ERROR) {
			return rejectWithValue(data.messages[0])
		}
	}
)

export const logoutUser = createAsyncThunk<void, undefined, ThunkAPI>(
	'auth/logout',
	async (_, { dispatch }) => {
		await authAPI.logout()
		dispatch(authActions.setCaptchaAC({ url: null }))
	}
)

export const getCaptchaURL = createAsyncThunk<void, undefined, ThunkAPI>(
	'auth/getCaptchaURL',
	async (_, { dispatch }) => {
		const data: GetCaptchaURL = await securityAPI.getCaptchaURL()
		dispatch(authActions.setCaptchaAC({ url: data.url }))
	}
)

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuthDataAC(state, action: PayloadAction<SetAuthDataT>) {
			const { userName, email, id } = action.payload
			state.userName = userName
			state.email = email
			state.id = id
			state.isAuth = true
		},
		setLoginDataAC(state, action: PayloadAction<SetLoginDataT>) {
			const { id, isAuth } = action.payload
			state.id = id
			state.isAuth = isAuth
		},
		setCaptchaAC(state, action: PayloadAction<{ url: string | null }>) {
			state.captcha = action.payload.url
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAuthUserData.pending, (state) => {
				state.status = 'pending'
				state.error = null
			})
			.addCase(getAuthUserData.fulfilled, (state) => {
				state.status = 'resolved'
				state.error = null
			})
			.addCase(loginUser.pending, (state) => {
				state.status = 'pending'
				state.error = null
			})
			.addCase(loginUser.fulfilled, (state) => {
				state.status = 'resolved'
				state.error = null
			})
			.addCase(logoutUser.pending, (state) => {
				state.status = 'pending'
				state.error = null
			})
			.addCase(logoutUser.fulfilled, (state) => {
				state.status = 'resolved'
				state.error = null
				state.isAuth = false
			})
			.addCase(getCaptchaURL.pending, (state) => {
				state.status = 'pending'
				state.error = null
			})
			.addCase(getCaptchaURL.fulfilled, (state) => {
				state.status = 'resolved'
				state.error = null
			})
			.addMatcher(
				isActionError,
				(state, action: PayloadAction<string>) => {
					state.error = action.payload
					console.error(state.error)
				}
			)
	}
})

export const selectLogin = (state: RootState) => state.auth.userName

export const selectIsAuth = (state: RootState) => state.auth.isAuth

export const selectError = (state: RootState) => state.auth.error!

export const selectCaptcha = (state: RootState) => state.auth.captcha

export const { reducer: authReducers, actions: authActions } = authSlice
