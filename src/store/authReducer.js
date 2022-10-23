import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authAPI} from "../api/api";
import {setProfileInfoAC} from "./profileReducer";

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
);

export const loginUser = createAsyncThunk(
    'auth/login',
    async ({email, password, rememberMe}, {dispatch, rejectWithValue}) => {
        try {
            const data = await authAPI.login({email, password, rememberMe});
            if (data.resultCode === 0) {
                dispatch(setLoginDataAC({id: data.data.userId, isAuth: true}))
                dispatch(getAuthUserData());
            } else {
                dispatch(setLoginDataAC({id: null, isAuth: false}))
                throw new Error(data.messages[0])
            }
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const logoutUser = createAsyncThunk(
    'auth/logout',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            const data = await authAPI.logout();
            if (data.resultCode === 0) {
                dispatch(setAuthDataAC({data: {login: null, email: null, id: null}}));
                dispatch(setProfileInfoAC({profileInfo: null}))
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    status: null,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthDataAC(state, action) {
            let {login, email, id} = action.payload.data;
            state.login = login;
            state.email = email;
            state.id = id;
            state.isAuth = true;
        },
        setLoginDataAC(state, action) {
            state.id = action.payload.id;
            state.isAuth = action.payload.isAuth;
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
            console.log(state.error);
        },
    }
});

export const {setAuthDataAC, setLoginDataAC} = authSlice.actions;
export default authSlice.reducer;