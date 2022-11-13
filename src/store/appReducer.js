import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAuthUserData} from "./authReducer";

const initialState = {
    isInitialized: false,
    status: null,
    error: null,
    theme: 'dark'
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
            state.theme = 'dark' // get from localstorage
        },
        setThemeAC(state, action) {
            state.theme = action.payload.theme
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

export const selectTheme = state => state.app.theme;

export const {initializeAppAC, setThemeAC} = appSlice.actions;

export default appSlice.reducer;