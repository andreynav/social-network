import React from "react";
import style from './MyPosts.module.css'
import { Post, TextAreaForm } from "../../index";
import { addPostActionCreator, updatePostAreaActionCreator } from "../../../customRedux/profilePageReducer";

export default function MyPosts({ myPosts, postAreaValue, dispatch }) {
    let posts = myPosts.map( post => <Post key={post.id} message={post.message} like={post.like} />)
    let addPost = () => {
        dispatch(addPostActionCreator())
    }
    let updatePostArea = (event) => {
        let text = event.target.value;
        dispatch(updatePostAreaActionCreator(text))
    }

    return (
        <div className={style.userPostsWrapper}>
            <h3 className={style.postsTitle}>My Posts</h3>
            <TextAreaForm updatePostArea={updatePostArea}
                          postAreaValue={postAreaValue}
                          addPost={addPost} />
            <div className={style.allPostsWrapper}>
                { posts }
            </div>
        </div>
    );
}