import { configureStore, combineReducers } from '@reduxjs/toolkit'
import dialogPageSlice from "./dialogPageReducer";
import profilePageSlice from "./profilePageReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    dialogPage: dialogPageSlice,
    profilePage: profilePageSlice,
    usersPage: usersPageReducer,
    auth: authReducer
});

const store = configureStore({
    reducer:  rootReducer
})

export default store;