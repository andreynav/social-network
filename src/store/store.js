import { configureStore, combineReducers } from '@reduxjs/toolkit'
import dialogPageSlice from "./dialogPageReducer";
import profilePageSlice from "./profilePageReducer";

const rootReducer = combineReducers({
    dialogPage: dialogPageSlice,
    profilePage: profilePageSlice
});

const store = configureStore({
    reducer:  rootReducer
})

export default store;