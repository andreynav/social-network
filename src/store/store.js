import { configureStore, combineReducers } from '@reduxjs/toolkit'
import dialogPageSlice from "./dialogPageReducer";
import profileReducer from "./profileReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    dialogPage: dialogPageSlice,
    profile: profileReducer,
    usersPage: usersPageReducer,
    auth: authReducer
});

const store = configureStore({
    reducer:  rootReducer
})

export default store;