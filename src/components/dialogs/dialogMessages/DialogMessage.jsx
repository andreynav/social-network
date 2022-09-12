import React from "react";
import style from "./DialogMessage.module.css";
import avatar from "../../../assets/img/avatar-post.png";

export default function DialogMessage({ message }) {
    return (
        <div className={style.messageWrapper}>
            <div className={style.userAvatar}>
                <img src={avatar} alt='avatar'/>
            </div>
            <div className={style.message}>{message}</div>
        </div>
    );
}