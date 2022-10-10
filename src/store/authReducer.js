import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authAPI} from "../api/api";

export const getAuthUserData = createAsyncThunk(
    'auth/getAuthUserData',
    async (_, {dispatch,rejectWithValue}) => {
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
            let {id, login, email} = action.payload.data;
            if (login) {
                state.id = id;
                state.login = login;
                state.email = email;
                state.isAuth = true;
            }
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
        }
    }
});

export const {setAuthDataAC} = authSlice.actions;
export default authSlice.reducer;