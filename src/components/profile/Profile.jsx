import React from "react";
import style from './Profile.module.css'
import Post from "./myPosts/post/Post";

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
            <div className={style.userPostsWrapper}>
                <div className={style.postsTitle}>My Posts</div>
                <div className={style.postsInput}>
                    <textarea className={style.area} />
                    <button className={style.buttonSend}>Send</button>
                </div>
                <div className={style.allPostsWrapper}>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </main>
    );
}