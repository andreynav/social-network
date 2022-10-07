import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthDataAC(state, action) {
            let {id, login, email} = action.payload.data;
            if (login) {
                state.id = id;
                state.login = login;
                state.email = email;
                state.isAuth = true;
            }
        }
    }
});

export const {setAuthDataAC} = authSlice.actions;
export default authSlice.reducer;