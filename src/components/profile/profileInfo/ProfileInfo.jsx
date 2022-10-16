import React from "react";
import style from "./ProfileInfo.module.css";
import {avatar} from "../../../assets";
import {Loader, ProfileInfoItem} from "../../index";

export default function ProfileInfo({profileInfo, profileStatus, updateProfileStatus, currentUserId, userId}) {
    if (!profileInfo) return <Loader/>

    const { aboutMe, photos, fullName, lookingForAJob,
        lookingForAJobDescription, contacts } = profileInfo;

    const {profileInfoWrapper, backgroundPhoto, userDataWrapper, userAvatar, userInfo} = style;

    let srcData = photos.small !== null ? photos.small : avatar;

    const profileData = [
        {itemName: "Full name", itemData: fullName},
        {itemName: "About me", itemData: aboutMe},
        {itemName: "Looking for a job status", itemData: lookingForAJob ? 'Yes' : 'No'},
        {itemName: "Looking for a job description", itemData: lookingForAJobDescription },
        {itemName: "Website", itemData: contacts.website},
        {itemName: "Facebook", itemData: contacts.facebook},
        {itemName: "Vk", itemData: contacts.vk},
        {itemName: "Twitter", itemData: contacts.twitter},
        {itemName: "Instagram", itemData: contacts.instagram},
        {itemName: "Youtube", itemData: contacts.youtube},
        {itemName: "Github", itemData: contacts.github},
        {itemName: "MainLink", itemData: contacts.mainLink},
    ]

    const profileItems = profileData.map( (item, index) => <ProfileInfoItem key={index}
                                                                            itemData={item.itemData || " - "}
                                                                            itemName={item.itemName} />);

    return (
        <div className={profileInfoWrapper}>
            <div className={backgroundPhoto}></div>
            <div className={userDataWrapper}>
                <div className={userAvatar}>
                    <img src={srcData} alt={`${fullName}`}/>
                </div>
                <div className={userInfo}>
                    <ProfileInfoItem itemData={profileStatus ?? "No status"}
                                     itemName={"My status"}
                                     isPointer
                                     updateProfileStatus={updateProfileStatus}
                                     currentUserId={currentUserId}
                                     userId={userId}/>
                    { profileItems }
                </div>
            </div>
        </div>
    );
}