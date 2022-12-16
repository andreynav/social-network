import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authAPI, securityAPI} from "../api/api";
import {setProfileInfoAC} from "./profileReducer";
import {RootState} from "./store";

type InitialStateT = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean,
    captcha: string | null,
    status: string | null,
    error: any | null
}

type AuthDataT = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
}

const initialState: InitialStateT = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captcha: null,
    status: null,
    error: null
}

export const getAuthUserData = createAsyncThunk(
    'auth/getAuthUserData',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            const data = await authAPI.me()
            if (data.resultCode === 0) {
                dispatch(setAuthDataAC({data: data.data}))
            }
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/login',
    async ({email, password, rememberMe, captcha}: AuthDataT, {dispatch, rejectWithValue}) => {
        try {
            const data = await authAPI.login({email, password, rememberMe, captcha});
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                if (data.resultCode === 10) {
                    dispatch(getCaptchaURL())
                }
                dispatch(setLoginDataAC({id: null, isAuth: false}))
                throw new Error(data.messages[0])
            }
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

export const logoutUser = createAsyncThunk(
    'auth/logout',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            const data = await authAPI.logout()
            if (data.resultCode === 0) {
                dispatch(setAuthDataAC({data: {login: null, email: null, id: null, captcha: null}}))
                dispatch(setProfileInfoAC({profileInfo: null}))
            }
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

export const getCaptchaURL = createAsyncThunk(
    'auth/getCaptchaURL',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            const data = await securityAPI.getCaptchaURL()
            dispatch(setCaptchaAC({url: data.url}))
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthDataAC(state, action) {
            let {login, email, id, captcha} = action.payload.data
            state.login = login
            state.email = email
            state.id = id
            state.isAuth = true
            state.captcha = captcha
        },
        setLoginDataAC(state, action) {
            state.id = action.payload.id
            state.isAuth = action.payload.isAuth
        },
        setCaptchaAC(state, action) {
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
            .addCase(getAuthUserData.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
            .addCase(loginUser.pending, (state) => {
                state.status = 'pending'
                state.error = null
            })
            .addCase(loginUser.fulfilled, (state) => {
                state.status = 'resolved'
                state.error = null
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
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
            .addCase(logoutUser.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
                console.error(state.error)
            })
            .addCase(getCaptchaURL.pending, (state) => {

            })
            .addCase(getCaptchaURL.fulfilled, (state) => {

            })
            .addCase(getCaptchaURL.rejected, (state, action) => {

            })
        }
    })


        export const selectLogin = (state: RootState) => state.auth.login

        export const selectIsAuth = (state: RootState) => state.auth.isAuth

        export const selectError = (state: RootState) => state.auth.error

        export const selectCaptcha = (state: RootState) => state.auth.captcha

        export const {setAuthDataAC, setLoginDataAC, setCaptchaAC} = authSlice.actions

        export default authSlice.reducer