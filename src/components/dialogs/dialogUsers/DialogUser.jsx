import React from "react";
import { NavLink } from "react-router-dom";
import style from "./DialogUser.module.css";
import { setActive } from "../../../utils/utills";

export default function DialogUser({ userName, userId }) {
    return (
        <div className={style.dialogUser}>
            <NavLink to={`/massages/${userId}`} className={setActive(style.activeLink)} >{userName}</NavLink>
        </div>
    );
}