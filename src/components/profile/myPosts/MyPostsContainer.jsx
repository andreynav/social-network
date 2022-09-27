import React from "react";
import {MyPosts} from "../../index";
import {addNewPost, updateNewPostArea} from "../../../store/profilePageReducer";

export default function MyPostsContainer({ store }) {
    let state = store.getState();
    let addPost = () => {
        store.dispatch(addNewPost());
    };
    let updatePostAreaValue = (text) => {
        store.dispatch(updateNewPostArea(text));
    };

    return (
        <MyPosts
            myPosts={state.profilePage.myPosts}
            postAreaValue={state.profilePage.postArea}
            addPost={addPost}
            updatePostAreaValue={updatePostAreaValue}
        />
    );
}