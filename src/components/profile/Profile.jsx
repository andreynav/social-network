import React from "react";
import style from './Profile.module.css'
import {MyPostsContainer, ProfileInfo} from "../index"

export default function Profile(props) {
    return (
        <main className={style.profileWrapper}>
            <ProfileInfo profileInfo={props.profileInfo}
                         profileStatus={props.profileStatus}
                         updateProfileStatus={props.updateProfileStatus}
                         currentUserId={props.userId}
                         userId={props.params.id ?? props.userId}/>
            <MyPostsContainer/>
        </main>
    );
}