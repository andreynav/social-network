import React from "react";
import style from './MyPosts.module.css'
import {Post, TextAreaForm} from "../../index";

export default function MyPosts({myPosts, postAreaValue, addNewPostAC, updateNewPostAreaAC}) {
    let posts = myPosts.map( post => <Post key={post.id} message={post.message} like={post.like} />);

    let addNewPost = () => {
        addNewPostAC();
    };
    let updatePostArea = (event) => {
        let text = event.target.value;
        updateNewPostAreaAC(text);
    }

    return (
        <div className={style.userPostsWrapper}>
            <h3 className={style.postsTitle}>My Posts</h3>
            <TextAreaForm updatePostArea={updatePostArea}
                          postAreaValue={postAreaValue}
                          onAddPost={addNewPost} />
            <div className={style.allPostsWrapper}>
                { posts }
            </div>
        </div>
    );
}