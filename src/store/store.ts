import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { appReducers } from './appReducer'
import { authReducers } from './authReducer'
import { dialogReducers } from './dialogReducer'
import { profileReducers } from './profileReducer'
import { userReducers } from './usersReducer'

const rootReducer = combineReducers({
  dialogs: dialogReducers,
  profile: profileReducers,
  users: userReducers,
  auth: authReducers,
  app: appReducers
})

const store = configureStore({
  reducer: rootReducer
})

export { store }
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
