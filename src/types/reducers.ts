import { AppDispatch, RootState } from '../store/store'

export type ThunkAPI = {
	dispatch?: AppDispatch
	rejectWithValue?: string
	state: RootState
}
