import React from "react";
import {MyPosts} from "../../index";
import {addNewPostAC, updateNewPostAreaAC} from "../../../store/profileReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        myPosts: state.profile.myPosts,
        postAreaValue: state.profile.postArea
    }
};

const MyPostsContainer = connect(mapStateToProps, {
    addNewPostAC,
    updateNewPostAreaAC
})(MyPosts);

export default MyPostsContainer;