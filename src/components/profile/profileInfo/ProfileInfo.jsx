import React from "react";
import style from "./ProfileInfo.module.css";
import {avatar} from "../../../assets";
import {Loader} from "../../index";

export default function ProfileInfo({profileInfo}) {
    if (!profileInfo) return <Loader />

    const {aboutMe,
        photos,
        fullName,
        lookingForAJob,
        lookingForAJobDescription,
        contacts} = profileInfo
    let srcData = photos.small !== null ? photos.small : avatar;

    return (
        <div className={style.profileInfoWrapper}>
            <div className={style.backgroundPhoto}>
                {/*<img src='' alt="photo"/>*/}
            </div>
            <div className={style.userDataWrapper}>
                <div className={style.userAvatar}>
                    <img src={srcData} alt={`${fullName}`}/>
                </div>
                <div className={style.userInfo}>
                    <div>
                        <span>Full name: </span>
                        {fullName || "-"}
                    </div>
                    <div>
                        <span>About me: </span>
                        {aboutMe || "-"}
                    </div>
                    <div>
                        <span>Looking for a job status: </span>
                        {lookingForAJob ? 'Yes' : 'No'}
                    </div>
                    <div>
                        <span>Looking for a job description: </span>
                        {lookingForAJobDescription}
                    </div>
                    <div>
                        <span>Contacts: </span>
                        <div><span>Facebook: </span>{contacts.facebook || "-"}</div>
                        <div><span>Website: </span>{contacts.website || "-"}</div>
                        <div><span>Vk: </span>{contacts.vk || "-"}</div>
                        <div><span>Twitter: </span>{contacts.twitter || "-"}</div>
                        <div><span>Instagram: </span>{contacts.instagram || "-"}</div>
                        <div><span>Youtube: </span>{contacts.youtube || "-"}</div>
                        <div><span>Github: </span>{contacts.github || "-"}</div>
                        <div><span>MainLink: </span>{contacts.mainLink || "-"}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}