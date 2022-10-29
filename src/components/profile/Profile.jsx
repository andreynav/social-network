import React from "react"
import style from './Profile.module.css'
import {MyPostsContainer, ProfileInfo} from "../index"

export const Profile = (props) => {
    const {profileInfo, profileStatus, updateProfileStatus, currentUserId, userId} = props

    return (
        <main className={style.profileWrapper}>
            <ProfileInfo profileInfo={profileInfo}
                         profileStatus={profileStatus}
                         updateProfileStatus={updateProfileStatus}
                         currentUserId={currentUserId}
                         userId={userId}/>
            <MyPostsContainer/>
        </main>
    )
}