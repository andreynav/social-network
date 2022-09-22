import React from "react";
import style from './Profile.module.css'
import { MyPosts, ProfileInfo } from "../index"

export default function Profile({ profilePage, addPosts, updatePostArea }) {
    return (
        <main className={style.profileWrapper}>
            <ProfileInfo />
            <MyPosts myPosts={profilePage.myPosts}
                     postAreaValue={profilePage.postArea}
                     addPost={addPosts}
                     updatePostArea={updatePostArea} />
        </main>
    );
}