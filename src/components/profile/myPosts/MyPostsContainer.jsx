import React from "react";
import {MyPosts} from "../../index";
import {addNewPostAC} from "../../../store/profileReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        myPosts: state.profile.myPosts,
    }
};

const MyPostsContainer = connect(mapStateToProps, {addNewPostAC})(MyPosts);

export default MyPostsContainer;