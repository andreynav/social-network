import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAuthUserData} from "./authReducer";

const initialState = {
    isInitialized: false,
    status: null,
    error: null,
}

export const initializeApp = createAsyncThunk(
    'app/initializeApp',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            let promise = dispatch(getAuthUserData());
            Promise.all([promise])
                .then(() => {
                    dispatch(initializeAppAC());
                });
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        initializeAppAC(state) {
            state.isInitialized = true;
        }
    },
    extraReducers: {
        [initializeApp.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [initializeApp.fulfilled]: (state) => {
            state.status = 'resolved';
            state.error = null;
        },
        [initializeApp.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
            console.error(state.error);
        },
    }
});

export const selectIsInitialized = state => state.app.isInitialized;

export const {initializeAppAC} = appSlice.actions;

export default appSlice.reducer;