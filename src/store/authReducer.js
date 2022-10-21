import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authAPI} from "../api/api";

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
                dispatch(setLoginDataAC({id: data.data.userId}))
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
            let {login, email} = action.payload.data;
            state.login = login;
            state.email = email;
        },
        setLoginDataAC(state, action) {
            state.id = action.payload.id;
            state.isAuth = true;
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
            console.log(state.error);
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
            state.error = action.error.message;
            console.log(state.error);
        }
    }
});

export const {setAuthDataAC, setLoginDataAC} = authSlice.actions;
export default authSlice.reducer;