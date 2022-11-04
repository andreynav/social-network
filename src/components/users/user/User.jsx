import React, {memo} from "react";
import style from "./User.module.css"
import {avatar} from "../../../assets";
import {NavLink} from "react-router-dom";
import {Button, Label} from "../../index";

export const User = memo((props) => {
    const {userWrapper, userAvatarWrapper, userData, itemData} = style
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
                <Button onClick={() => toggleFollow(id)}
                        disabled={followInProgress.some(userId => userId === id)}
                        height={'26px'}
                        minWidth={'50%'}
                        width={'70px'}
                        fontSize='10px'
                        color={'#282c34'}
                >
                    {followed ? "Follow" : "Unfollow"}
                </Button>
            </div>
            <div className={userData}>
                {userItems}
            </div>
        </div>
    );
})
