import React, {memo} from "react";
import style from "./User.module.css"
import {avatar} from "../../../assets";
import {NavLink} from "react-router-dom";

export const User = memo((props) => {
    const {userWrapper, userAvatarWrapper, userFollowStatus, userData, userName, userStatus, userCountry, userCity} = style
    const {photos, id, name, followInProgress, toggleFollow, followed, country, city} = props
    let srcData = photos.small !== null ? photos.small : avatar;

    return (
        <div className={userWrapper}>
            <div className={userAvatarWrapper}>
                <div>
                    <NavLink to={`/profile/${id}`}>
                        <img src={srcData} alt={`${name}`}/>
                    </NavLink>
                </div>
                <button disabled={followInProgress.some(userId => userId === id)}
                        className={userFollowStatus}
                        onClick={() => toggleFollow(id)}>
                    {followed ? "Follow" : "Unfollow"}
                </button>
            </div>
            <div className={userData}>
                <div className={userName}>
                    {name}
                </div>
                <div className={userStatus}>
                    user id: {id}
                    {/*{props.status}*/}
                </div>
                <div className={userCountry}>
                    {country}
                </div>
                <div className={userCity}>
                    {city}
                </div>
            </div>
        </div>
    );
})