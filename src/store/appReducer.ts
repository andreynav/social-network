import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {getAuthUserData} from "./authReducer"
import {RootState} from "./store";

type InitialStateT = {
    isInitialized: boolean,
    status: string | null,
    error: any | null,
    theme: string | null,
    language: string | null,
}

export type Theme = {
    theme: string
}

export type Language = {
    language: string
}

const initialState: InitialStateT = {
    isInitialized: false,
    status: null,
    error: null,
    theme: null,
    language: null,
}

export const initializeApp = createAsyncThunk(
    'App/initializeApp',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            let promise = dispatch(getAuthUserData());
            Promise.all([promise])
                .then(() => {
                    dispatch(initializeAppAC());
                });
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        initializeAppAC(state: InitialStateT) {
            state.isInitialized = true
        },
        setThemeAC(state: InitialStateT, action: PayloadAction<Theme>) {
            state.theme = action.payload.theme
        },
        setLanguageAC(state: InitialStateT, action: PayloadAction<Language>) {
            state.language = action.payload.language
        },
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
            .addCase(initializeApp.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
                console.error(state.error)
            })
    }
})

export const selectIsInitialized = (state: RootState) => state.app.isInitialized

export const {initializeAppAC, setThemeAC, setLanguageAC} = appSlice.actions

export default appSlice.reducer