import React, {memo} from "react";
import style from "./User.module.css"
import {avatar} from "../../../assets";
import {NavLink} from "react-router-dom";
import {Label} from "../../index";

export const User = memo((props) => {
    const {userWrapper, userAvatarWrapper, userFollowStatus, userData, itemData} = style
    const {photos, id, name, status, followInProgress, toggleFollow, followed, city} = props

    let srcData = photos.small !== null ? photos.small : avatar;

    const userDataArray = [
        {itemName: "Full name", value: name},
        {itemName: "Status", value: status},
        {itemName: "Id", value: id},
        {itemName: "City", value: city},
    ]

    const userItems = userDataArray.map((item, index) => <div key={index}>
                                                             <Label fontSize='10px'>{item.itemName}</Label>
                                                             <div className={itemData}>
                                                                 {item.value || " - "}
                                                             </div>
                                                         </div>)

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
                {userItems}
            </div>
        </div>
    );
})