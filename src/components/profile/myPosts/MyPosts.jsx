import React from "react";
import style from './MyPosts.module.css'
import Post from "./post/Post";

export default function MyPosts({ myPosts, postAreaValue, addPost, updatePostArea }) {
    let posts = myPosts.map( post => <Post key={post.id} message={post.message} like={post.like} />)
    let refArea = React.createRef();

    return (
        <div className={style.userPostsWrapper}>
            <h3 className={style.postsTitle}>My Posts</h3>
            <div className={style.postsInput}>
                <textarea className={style.area} ref={refArea} onChange={updatePostArea} value={postAreaValue}/>
                <button className={style.buttonSend} onClick={addPost}>Send</button>
            </div>
            <div className={style.allPostsWrapper}>
                { posts }
            </div>
        </div>
    );
}