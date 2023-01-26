import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { DarkT, LightT } from '../styles/themes'
import { ThunkAPI } from '../types/reducers'
import { isActionError } from '../utils/isActionError'
import { getAuthUserData } from './authReducer'
import { RootState } from './store'

type InitialStateT = {
	isInitialized: boolean
	status: string | null
	error: any | null
	theme: LightT | DarkT | null
	language: string | null
}

export type ThemeT = {
	theme: LightT | DarkT
}

export type LanguageT = {
	language: 'English' | 'Russian'
}

const initialState: InitialStateT = {
	isInitialized: false,
	status: null,
	error: null,
	theme: null,
	language: null
}

export const initializeApp = createAsyncThunk<void, undefined, ThunkAPI>(
	'App/initializeApp',
	async (_, { dispatch, rejectWithValue }) => {
		const promise = dispatch(getAuthUserData())
		Promise.all([promise])
			.then(() => {
				dispatch(appActions.initializeAppAC())
			})
			.catch((error) => {
				return rejectWithValue(error.message)
			})
	}
)

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		initializeAppAC(state: InitialStateT) {
			state.isInitialized = true
		},
		setThemeAC(state: InitialStateT, action: PayloadAction<ThemeT>) {
			state.theme = action.payload.theme
		},
		setLanguageAC(state: InitialStateT, action: PayloadAction<LanguageT>) {
			state.language = action.payload.language
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(initializeApp.pending, (state) => {
				state.status = 'pending'
				state.error = null
			})
			.addCase(initializeApp.fulfilled, (state) => {
				state.status = 'resolved'
				state.error = null
			})
			.addMatcher(
				isActionError,
				(state, action: PayloadAction<string>) => {
					state.status = 'rejected'
					state.error = action.payload
					console.error(state.error)
				}
			)
	}
})

export const selectIsInitialized = (state: RootState) => state.app.isInitialized

export const { reducer: appReducers, actions: appActions } = appSlice
