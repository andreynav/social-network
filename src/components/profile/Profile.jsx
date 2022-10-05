import React from "react";
import style from './Profile.module.css'
import {MyPostsContainer, ProfileInfo} from "../index"

export default function Profile(props) {
    console.log(props)
    return (
        <main className={style.profileWrapper}>
            <ProfileInfo profileInfo={props.profileInfo}/>
            <MyPostsContainer />
        </main>
    );
}