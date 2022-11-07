import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {profileAPI} from "../api/api";

let initialState = {
    myPosts: [
        {id: 1, message: "Hey, how are you?", like: 105},
        {id: 2, message: "You shell not pass, fellow!", like: 304},
        {id: 3, message: "It\'s my life", like: 118},
        {id: 4, message: "Nice day, let's learn React", like: 257},
    ],
    profileInfo: null,
    profileStatus: null,
    profileInfoLoadingStatus: null,
    profileInfoLoadingError: null,
};

let getRandomLike = max => {
    return Math.floor(Math.random() * max)
}

export const getProfileInfo = createAsyncThunk(
    'profile/getProfileInfo',
    async (userId, {dispatch,rejectWithValue}) => {
        try {
            const data = await profileAPI.getProfileInfo(userId);
            dispatch(setProfileInfoAC({profileInfo: data}));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getProfileStatus = createAsyncThunk(
    'profile/getProfileStatus',
    async (userId, {dispatch, rejectWithValue}) => {
        try {
            const data = await profileAPI.getProfileStatus(userId);
            dispatch(setProfileStatusAC({profileStatus: data}));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const updateProfileStatus = createAsyncThunk(
    'profile/updateProfileStatus',
    async (status, {dispatch, rejectWithValue}) => {
        try {
            const data = await profileAPI.updateProfileStatus(status);
            if (data.resultCode === 0) {
                dispatch(setProfileStatusAC({profileStatus: status}));
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const updateProfilePhoto = createAsyncThunk(
    'profile/updateProfilePhoto',
    async (file, {dispatch, rejectWithValue}) => {
        try {
            const data = await profileAPI.updateProfilePhoto(file);
            if (data.resultCode === 0) {
                dispatch(setProfilePhotoAC({photos: data.data.photos}));
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        addNewPostAC(state, action) {
            let postId = state.myPosts.length;
            let post = {
                id: ++postId,
                message: action.payload.message,
                like: getRandomLike(400)
            }
            state.myPosts = [...state.myPosts, post]
        },
        setProfileInfoAC(state, action) {
            state.profileInfo = action.payload.profileInfo;
        },
        setProfileStatusAC(state, action) {
            state.profileStatus = action.payload.profileStatus;
        },
        setProfilePhotoAC(state, action) {
            state.profileInfo.photos = action.payload.photos
        }
    },
    extraReducers: {
        [getProfileInfo.pending]: (state) => {
            state.profileInfoLoadingStatus = 'pending';
            state.profileInfoLoadingError = null;
        },
        [getProfileInfo.fulfilled]: (state) => {
            state.profileInfoLoadingStatus = 'resolved';
            state.profileInfoLoadingError = null;
        },
        [getProfileInfo.rejected]: (state, action) => {
            state.profileInfoLoadingStatus = 'rejected';
            state.profileInfoLoadingError = action.error.message;
            console.error(state.error);
        },
        [getProfileStatus.pending]: (state) => {  },
        [getProfileStatus.fulfilled]: (state, action) => { },
        [getProfileStatus.rejected]: (state, action) => { },
        [updateProfileStatus.pending]: (state) => {  },
        [updateProfileStatus.fulfilled]: (state, action) => { },
        [updateProfileStatus.rejected]: (state, action) => { },
        [updateProfilePhoto.pending]: (state) => {  },
        [updateProfilePhoto.fulfilled]: (state, action) => { },
        [updateProfilePhoto.rejected]: (state, action) => { },
    }
});

export const selectMyPosts = state => state.profile.myPosts;

export const selectProfileInfo = state => state.profile.profileInfo;

export const selectProfileInfoLoadingStatus = state => state.profile.profileInfoLoadingStatus;

export const selectProfileInfoLoadingError = state => state.profile.profileInfoLoadingError;

export const selectProfileStatus = state => state.profile.profileStatus;

export const { addNewPostAC, setProfileInfoAC, setProfileStatusAC, setProfilePhotoAC } = profileSlice.actions;

export default profileSlice.reducer;
