import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authAPI, securityAPI} from "../api/api";
import {setProfileInfoAC} from "./profileReducer";

const initialState = {
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
            const data = await authAPI.me();
            if (data.resultCode === 0) {
                dispatch(setAuthDataAC({data: data.data}));
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/login',
    async ({email, password, rememberMe, captcha}, {dispatch, rejectWithValue}) => {
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
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const logoutUser = createAsyncThunk(
    'auth/logout',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            const data = await authAPI.logout();
            if (data.resultCode === 0) {
                dispatch(setAuthDataAC({data: {login: null, email: null, id: null, captcha: null}}));
                dispatch(setProfileInfoAC({profileInfo: null}))
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getCaptchaURL = createAsyncThunk(
    'auth/getCaptchaURL',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            const data = await securityAPI.getCaptchaURL()
            dispatch(setCaptchaAC({url: data.url}))
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthDataAC(state, action) {
            let {login, email, id, captcha} = action.payload.data;
            state.login = login;
            state.email = email;
            state.id = id;
            state.isAuth = true;
            state.captcha = captcha;
        },
        setLoginDataAC(state, action) {
            state.id = action.payload.id;
            state.isAuth = action.payload.isAuth;
        },
        setCaptchaAC(state, action) {
            state.captcha = action.payload.url;
        }
    },
    extraReducers: {
        [getAuthUserData.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAuthUserData.fulfilled]: (state) => {
            state.status = 'resolved';
            state.error = null;
        },
        [getAuthUserData.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        },
        [loginUser.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [loginUser.fulfilled]: (state) => {
            state.status = 'resolved';
            state.error = null;
        },
        [loginUser.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [logoutUser.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [logoutUser.fulfilled]: (state) => {
            state.status = 'resolved';
            state.error = null;
            state.isAuth = false;
        },
        [logoutUser.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
            console.error(state.error);
        },
        [getCaptchaURL.pending]: (state) => { },
        [getCaptchaURL.fulfilled]: (state) => { },
        [getCaptchaURL.rejected]: (state, action) => { },
    }
});

export const selectLogin = state => state.auth.login;

export const selectIsAuth = state => state.auth.isAuth;

export const selectError = state => state.auth.error;

export const selectCaptcha = state => state.auth.captcha;

export const {setAuthDataAC, setLoginDataAC, setCaptchaAC} = authSlice.actions;

export default authSlice.reducer;