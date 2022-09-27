import React from "react";
import style from './Profile.module.css'
import {MyPostsContainer, ProfileInfo} from "../index"

export default function Profile({ store }) {
    return (
        <main className={style.profileWrapper}>
            <ProfileInfo />
            <MyPostsContainer store={store} />
        </main>
    );
}