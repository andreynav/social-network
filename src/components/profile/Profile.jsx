import React from "react";
import style from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

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