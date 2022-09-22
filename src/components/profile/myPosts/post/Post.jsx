import React from "react";
import style from './Post.module.css'
import { avatar, like } from "../../../../assets/index"

export default function Post(props) {
    return (
        <div className={style.postWrapper}>
            <div className={style.myAvatar}>
                <img src={avatar} alt='avatar'/>
            </div>
            <div className={style.myPost}>{props.message}</div>
            <div className={style.myPostLike}>
                <img src={like} alt='like'/>
                <div>{props.like}</div>
            </div>
        </div>
    );
}