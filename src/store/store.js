import { configureStore, combineReducers } from '@reduxjs/toolkit'
import dialogsReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    dialogs: dialogsReducer,
    profile: profileReducer,
    users: usersReducer,
    auth: authReducer
});

const store = configureStore({
    reducer:  rootReducer
})

export default store;