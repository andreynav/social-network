import React from "react";
import {MyPosts} from "../../index";
import {addNewPostAC, selectMyPosts} from "../../../store/profileReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    myPosts: selectMyPosts(state),
});

const MyPostsContainer = connect(mapStateToProps, {addNewPostAC})(MyPosts);

export default MyPostsContainer;