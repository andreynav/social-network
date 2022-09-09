import React from "react";
import style from './Post.module.css'
import avatar from '../../../../Avatar-Profile-PNG-Photos.png'

export default function Post() {
    return (
        <div className={style.postWrapper}>
            <div className={style.avatar}>
                <img src={avatar} alt='avatar'/>
            </div>
            <div className={style.myPost}>... post ...</div>
        </div>
    );
}