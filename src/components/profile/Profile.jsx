import React from "react";
import style from './Profile.module.css'
import { MyPosts, ProfileInfo } from "../index"

export default function Profile({ profilePage, dispatch }) {
    return (
        <main className={style.profileWrapper}>
            <ProfileInfo />
            <MyPosts myPosts={profilePage.myPosts}
                     postAreaValue={profilePage.postArea}
                     dispatch={dispatch} />
        </main>
    );
}