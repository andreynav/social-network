import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { authAPI, securityAPI } from '../api/api'
import { isActionError } from '../utils/isActionError'
import { RootState } from './store'

export type AuthDataT = {
	email: string
	password: string
	rememberMe: boolean
	captcha?: string
}

type SetAuthDataT = {
	id: number | null
	userName: string | null
	email: string | null
}

type SetLoginDataT = {
	id: number | null
	isAuth: boolean
}

type InitialStateT = {
	id: number | null
	userName: string | null
	email: string | null
	isAuth: boolean
	captcha: string | null
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

export const getAuthUserData = createAsyncThunk(
	'auth/getAuthUserData',
	async (_, { dispatch, rejectWithValue }) => {
		try {
			const data = await authAPI.me()
			const { id, login: userName, email } = data.data
			if (data.resultCode === 0) {
				dispatch(setAuthDataAC({ id, userName, email }))
			}
		} catch (error: any) {
			return rejectWithValue(error.message)
		}
	}
)

export const loginUser = createAsyncThunk(
	'auth/login',
	async (
		{ email, password, rememberMe, captcha }: AuthDataT,
		{ dispatch, rejectWithValue }
	) => {
		try {
			const data = await authAPI.login({ email, password, rememberMe, captcha })
			if (data.resultCode === 0) {
				dispatch(getAuthUserData())
			} else {
				if (data.resultCode === 10) {
					dispatch(getCaptchaURL())
				}
				dispatch(setLoginDataAC({ id: null, isAuth: false }))
				dispatch(setCaptchaAC({ url: null }))
				throw new Error(data.messages[0])
			}
		} catch (error: any) {
			return rejectWithValue(error.message)
		}
	}
)

export const logoutUser = createAsyncThunk(
	'auth/logout',
	async (_, { dispatch, rejectWithValue }) => {
		try {
			await authAPI.logout()
			dispatch(setCaptchaAC({ url: null }))
		} catch (error: any) {
			return rejectWithValue(error.message)
		}
	}
)

export const getCaptchaURL = createAsyncThunk(
	'auth/getCaptchaURL',
	async (_, { dispatch, rejectWithValue }) => {
		try {
			const data = await securityAPI.getCaptchaURL()
			dispatch(setCaptchaAC({ url: data.url }))
		} catch (error: any) {
			return rejectWithValue(error.message)
		}
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
			.addMatcher(isActionError, (state, action: PayloadAction<string>) => {
				state.error = action.payload
				console.error(state.error)
			})
	}
})

export const selectLogin = (state: RootState) => state.auth.userName

export const selectIsAuth = (state: RootState) => state.auth.isAuth

export const selectError = (state: RootState) => state.auth.error!

export const selectCaptcha = (state: RootState) => state.auth.captcha

export const { setAuthDataAC, setLoginDataAC, setCaptchaAC } = authSlice.actions

export const authReducers = authSlice.reducer
