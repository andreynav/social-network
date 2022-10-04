import React from "react";
import {MyPosts} from "../../index";
import {addNewPostAC, updateNewPostAreaAC} from "../../../store/profilePageReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        myPosts: state.profilePage.myPosts,
        postAreaValue: state.profilePage.postArea
    }
};

const MyPostsContainer = connect(mapStateToProps, {
    addNewPostAC,
    updateNewPostAreaAC
})(MyPosts);

export default MyPostsContainer;