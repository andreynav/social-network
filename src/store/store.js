import { configureStore, combineReducers } from '@reduxjs/toolkit'
import dialogPageSlice from "./dialogPageReducer";
import profilePageSlice from "./profilePageReducer";
import usersPageReducer from "./usersPageReducer";

const rootReducer = combineReducers({
    dialogPage: dialogPageSlice,
    profilePage: profilePageSlice,
    usersPage: usersPageReducer
});

const store = configureStore({
    reducer:  rootReducer
})

export default store;