import React from "react";
import {connect} from "react-redux";
import {compose} from "@reduxjs/toolkit";
import {Profile} from "../index";
import {setProfileInfo} from "../../store/profileReducer";
import {withRouter} from "../hoc/withRouter"; // import from index.js doesn't work. Why?
import {withAuthRedirect} from "../hoc/withAuthRedirect"; // import from index.js doesn't work. Why?

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.id || this.props.userId || 2;
        this.props.setProfileInfo(userId);
    }

    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profile.profileInfo,
        profileInfoStatus: state.profile.profileInfoStatus,
        profileInfoError: state.profile.profileInfoError,
    }
}

export default compose(
    connect(mapStateToProps, {setProfileInfo}),
    withAuthRedirect,
    withRouter
)(ProfileContainer)
