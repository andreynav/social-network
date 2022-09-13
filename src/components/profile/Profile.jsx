import React from "react";
import style from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

export default function Profile() {
    return (
        <main className={style.profileWrapper}>
            <ProfileInfo />
            <MyPosts />
        </main>
    );
}