import React, {useEffect} from "react";
import {connect, useDispatch} from "react-redux";
import {compose} from "@reduxjs/toolkit";
import {Profile} from "../index";
import {
    getProfileInfo,
    getProfileStatus,
    selectProfileInfo,
    selectProfileInfoLoadingError,
    selectProfileInfoLoadingStatus,
    selectProfileStatus,
    updateProfileStatus,
    updateProfilePhoto,
    updateProfileInfo,
    selectProfileInfoUpdateStatus,
    selectProfileInfoUpdateError
} from "../../store/profileReducer";
import {withRouter} from "../../hoc/withRouter"
import {withAuthRedirect} from "../../hoc/withAuthRedirect"

const ProfileContainer = (props) => {
    const {currentUserId, userId, getProfileInfo, getProfileStatus} = props
    const dispatch = useDispatch();

    useEffect(() => {
        let id = currentUserId || userId;
        getProfileInfo(id);
        getProfileStatus(id);
    }, [currentUserId])

    const onSavePhoto = (e) => {
        dispatch(updateProfilePhoto(e.target.files[0]))
    }

    return <Profile onSavePhoto={onSavePhoto}
                    updateProfileInfo={updateProfileInfo}
                    {...props} />
}

let mapStateToProps = (state) => ({
    profileInfo: selectProfileInfo(state),
    profileInfoLoadingStatus: selectProfileInfoLoadingStatus(state),
    profileInfoLoadingError: selectProfileInfoLoadingError(state),
    profileStatus: selectProfileStatus(state),
    profileInfoUpdateStatus: selectProfileInfoUpdateStatus(state),
    profileInfoUpdateError: selectProfileInfoUpdateError(state),
})

export default compose(
    connect(mapStateToProps,
        {
            getProfileInfo,
            getProfileStatus,
            updateProfileStatus,
            updateProfilePhoto,
            updateProfileInfo
        }),
    withAuthRedirect,
    withRouter
)(ProfileContainer)
