import React from "react"
import {MyPostsContainer, ProfileInfo} from "../index"
import styled from "styled-components";

export const Profile = (props) => {
    const {profileInfo, profileStatus, updateProfileStatus, currentUserId, userId, onSavePhoto} = props

    return (
        <ProfileWrapper>
            <ProfileInfo profileInfo={profileInfo}
                         profileStatus={profileStatus}
                         updateProfileStatus={updateProfileStatus}
                         currentUserId={currentUserId}
                         userId={userId}
                         onSavePhoto={onSavePhoto}/>
            <MyPostsContainer/>
        </ProfileWrapper>
    )
}

const ProfileWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  overflow: visible auto;
`

