import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    users: [
        {
            id: 1,
            fullName: "Andrey N",
            status: "I'm am boss",
            location: {
                country: "Belarus",
                city: "Minsk"
            },
            followed: true,
            photoUrl: ""
        },
        {
            id: 2,
            fullName: "Anna N",
            status: "Life is beautiful",
            location: {
                country: "Belarus",
                city: "Minsk"
            },
            followed: false,
            photoUrl: ""
        },
        {
            id: 3,
            fullName: "Zlata N",
            status: "Minecraft forever!",
            location: {
                country: "Belarus",
                city: "Minsk"
            },
            followed: true,
            photoUrl: ""
        },
        {
            id: 4,
            fullName: "Yuri K",
            status: "Let's code",
            location: {
                country: "Russia",
                city: "Moscow"
            },
            followed: false,
            photoUrl: ""
        }
    ]
};

const usersPageSlice = createSlice({
    name: 'usersPage',
    initialState,
    reducers: {
        changeToggleAC(state, action) {
            state.users.map(user => {
                if (user.id === action.payload.userId) {
                    user.followed = !user.followed
                }
            })
        },
        setUsersAC(state, action) {
            state.users = [...state.users, ...action.payload.users]
        }
    }
});

export const {changeToggleAC, setUsersAC} = usersPageSlice.actions;
export default usersPageSlice.reducer;
