import React from "react";
import style from "./User.module.css"
import {avatar} from "../../../assets";

export default function User(props) {
    let srcData = props.photoUrl !== "" ? props.photoUrl : avatar;
    return (
        <div className={style.userWrapper}>
            <div className={style.userAvatarWrapper}>
                <div>
                    <img src={srcData} alt='avatar'/>
                </div>
                <div className={style.userFollowStatus} onClick={() => props.toggleFollow(props.id)}>
                    {props.followed ? "Follow" : "Unfollow"}
                </div>
            </div>
            <div className={style.userData}>
                <div className={style.name}>
                    {props.fullName}
                </div>
                <div className={style.status}>
                    {props.status}
                </div>
                <div className={style.country}>
                    {props.country}
                </div>
                <div className={style.city}>
                    {props.city}
                </div>
            </div>
        </div>
    );
}