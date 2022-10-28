import React, {useEffect} from "react";
import {connect} from "react-redux";
import {compose} from "@reduxjs/toolkit";
import {Profile} from "../index";
import {
    getProfileInfo,
    getProfileStatus,
    selectProfileInfo,
    selectProfileInfoLoadingError,
    selectProfileInfoLoadingStatus,
    selectProfileStatus,
    updateProfileStatus
} from "../../store/profileReducer";
import {withRouter} from "../hoc/withRouter"; // import from index.js doesn't work. Why?
import {withAuthRedirect} from "../hoc/withAuthRedirect"; // import from index.js doesn't work. Why?

const ProfileContainer = (props) => {
    const {currentUserId, userId, getProfileInfo, getProfileStatus} = props

    useEffect(() => {
        let id = currentUserId || userId;
        getProfileInfo(id);
        getProfileStatus(id);
    }, [])

    return <Profile {...props} />
}

let mapStateToProps = (state) => ({
    profileInfo: selectProfileInfo(state),
    profileInfoLoadingStatus: selectProfileInfoLoadingStatus(state),
    profileInfoLoadingError: selectProfileInfoLoadingError(state),
    profileStatus: selectProfileStatus(state),
})

export default compose(
    connect(mapStateToProps, {getProfileInfo, getProfileStatus, updateProfileStatus}),
    withAuthRedirect,
    withRouter
)(ProfileContainer)
