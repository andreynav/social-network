import { configureStore, combineReducers } from '@reduxjs/toolkit'
import dialogPageReducer from "./dialogPageReducer";
import profilePageReducer from "./profilePageReducer";

const rootReducer = combineReducers({
    dialogPage: dialogPageReducer,
    profilePage: profilePageReducer
});

const store = configureStore({
    reducer:  rootReducer
})

export default store;