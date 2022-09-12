import React from "react";
import style from "./DialogUser.module.css";

export default function DialogUser({ userName }) {
    return (
        <div className={style.dialogUser}>
            {userName}
        </div>
    );
}