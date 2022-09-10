import React from "react";
import style from './MyPosts.module.css'
import Post from "./post/Post";

export default function MyPosts() {
    return (
        <div className={style.userPostsWrapper}>
            <div className={style.postsTitle}>My Posts</div>
            <div className={style.postsInput}>
                <textarea className={style.area} />
                <button className={style.buttonSend}>Send</button>
            </div>
            <div className={style.allPostsWrapper}>
                <Post message="Hey, how are you?" like="105" />
                <Post message="Yuo shell not pass, fellow!" like="304" />
                <Post message="It's my life" like="118" />
                <Post message="Nice day, let's learn React" like="267" />
                <Post message="Nice day, let's learn React" like="267" />
                <Post message="Nice day, let's learn React" like="267" />
                <Post message="Nice day, let's learn React" like="267" />
                <Post message="Nice day, let's learn React" like="267" />
            </div>
        </div>
    );
}