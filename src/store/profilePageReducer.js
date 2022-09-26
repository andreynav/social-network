import {createAction, createReducer} from '@reduxjs/toolkit';

export const addNewPost = createAction('ADD-POST');
export const updateNewPostArea = createAction('UPDATE-POST-AREA', function prepare(text) {
    return {
        payload: {
            newText: text
        }
    }
});

let initialState = {
    myPosts: [
        {id: 1, message: "Hey, how are you?", like: 105},
        {id: 2, message: "You shell not pass, fellow!", like: 304},
        {id: 3, message: "It\'s my life", like: 118},
        {id: 4, message: "Nice day, let's learn React", like: 257},
        {id: 5, message: "Nice day, let's learn React2", like: 357},
        {id: 6, message: "Nice day, let's learn React3", like: 457},
        {id: 7, message: "Nice day, let's learn React4", like: 557},
        {id: 8, message: "Nice day, let's learn React5", like: 657}
    ],
    postArea: ''
};

const profilePageReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addNewPost, (state) => {
            let postId = state.myPosts.length;
            let post = {
                id: ++postId,
                message: state.postArea,
                like: 0
            }
            state.myPosts.push(post);
            state.postArea = '';
        })
        .addCase(updateNewPostArea, (state, action) => {
            state.postArea = action.payload.newText;
        });
});

export default profilePageReducer;