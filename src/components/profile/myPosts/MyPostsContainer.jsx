import React from "react";
import {MyPosts} from "../../index";
import {addNewPost, updateNewPostArea} from "../../../store/profilePageReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        myPosts: state.profilePage.myPosts,
        postAreaValue: state.profilePage.postArea
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addNewPost());
        },
        updatePostAreaValue: (text) => {
            dispatch(updateNewPostArea(text));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;