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
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}