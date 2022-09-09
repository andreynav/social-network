import React from "react";
import style from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";

export default function Profile() {
    return (
        <main className={style.profileWrapper}>
            <div className={style.backgroundPhoto}>
                {/*<img src='' alt="background"/>*/}
            </div>
            <div className={style.userDataWrapper}>
                <div className={style.userAvatar}>
                    <p>avatar</p>
                </div>
                <div className={style.userInfo}>
                    <p>Data: ...</p>
                </div>
            </div>
            <MyPosts />
        </main>
    );
}