import React from "react"
import {Loader, MyPostsContainer, ProfileInfo} from "../index"
import styled from "styled-components";

export const Profile = (props) => {
    const {
        profileInfo,
        profileStatus,
        updateProfileStatus,
        currentUserId,
        userId,
        onSavePhoto,
        profileInfoUpdateError,
        updateProfileInfo
    } = props

    if (!profileInfo) return <Loader/>

    return (
        <ProfileWrapper>
            <ProfileInfo profileInfo={profileInfo}
                         profileStatus={profileStatus}
                         updateProfileStatus={updateProfileStatus}
                         currentUserId={currentUserId}
                         userId={userId}
                         onSavePhoto={onSavePhoto}
                         profileInfoUpdateError={profileInfoUpdateError}
                         updateProfileInfo={updateProfileInfo}/>
            <MyPostsContainer/>
        </ProfileWrapper>
    )
}

const ProfileWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  overflow: visible auto;
`

