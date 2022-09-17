import React from "react";
import style from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

export default function Profile({ myPosts, addPosts }) {
    return (
        <main className={style.profileWrapper}>
            <ProfileInfo />
            <MyPosts myPosts={myPosts} addPost={addPosts} />
        </main>
    );
}