import React from "react";
import style from "./ProfileInfo.module.css";

let comp = React.createRef();

export default function ProfileInfo() {
    return (
        <div className={style.profileInfoWrapper}>
            <div className={style.backgroundPhoto}>
                {/*<img src='' alt="background"/>*/}
            </div>
            <div className={style.userDataWrapper}>
                <div className={style.userAvatar}>
                    <p>avatar</p>
                </div>
                <div className={style.userInfo}>
                    <p>Data: ...</p>
                </div>
            </div>
        </div>
    );
}