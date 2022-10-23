import React from "react";
import {connect} from "react-redux";
import {compose} from "@reduxjs/toolkit";
import {Profile} from "../index";
import {getProfileInfo, getProfileStatus, updateProfileStatus} from "../../store/profileReducer";
import {withRouter} from "../hoc/withRouter"; // import from index.js doesn't work. Why?
import {withAuthRedirect} from "../hoc/withAuthRedirect"; // import from index.js doesn't work. Why?

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.currentUserId || this.props.userId;

        this.props.getProfileInfo(userId);
        this.props.getProfileStatus(userId);
    }

    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profile.profileInfo,
        profileInfoLoadingStatus: state.profile.profileInfoLoadingStatus,
        profileInfoLoadingError: state.profile.profileInfoLoadingError,
        profileStatus: state.profile.profileStatus,
    }
}

export default compose(
    connect(mapStateToProps, {getProfileInfo, getProfileStatus, updateProfileStatus}),
    withAuthRedirect,
    withRouter
)(ProfileContainer)
