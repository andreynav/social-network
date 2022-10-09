import React from "react";
import style from "./User.module.css"
import {avatar} from "../../../assets";
import {NavLink} from "react-router-dom";

export default function User(props) {
    let srcData = props.photos.small !== null ? props.photos.small : avatar;
    return (
        <div className={style.userWrapper}>
            <div className={style.userAvatarWrapper}>
                <div>
                    <NavLink to={`/profile/${props.id}`}>
                        <img src={srcData} alt={`${props.name}`}/>
                    </NavLink>
                </div>
                <button disabled={props.followInProgress.some(id => id === props.id)}
                        className={style.userFollowStatus}
                        onClick={() => props.toggleFollow(props.id)}>
                    {props.followed ? "Follow" : "Unfollow"}
                </button>
            </div>
            <div className={style.userData}>
                <div className={style.name}>
                    {props.name}
                </div>
                <div className={style.status}>
                    user id: {props.id}
                    {/*{props.status}*/}
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