import { combineReducers, configureStore } from '@reduxjs/toolkit'

import appReducer from './appReducer'
import authReducer from './authReducer'
import dialogsReducer from './dialogReducer'
import profileReducer from './profileReducer'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
	dialogs: dialogsReducer,
	profile: profileReducer,
	users: usersReducer,
	auth: authReducer,
	app: appReducer
})

const store = configureStore({
	reducer: rootReducer
})

export default store
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
