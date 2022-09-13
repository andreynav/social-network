import React from "react";
import {NavLink} from "react-router-dom";
import style from "./NotFound.module.css";
import {setActive} from "../../utils/utills";

export default function NotFound() {
    return (
        <div>
            <p>404 page not found</p>
            <p>Go <NavLink to='/profile' className={setActive(style.activeLink)} >Profile</NavLink></p>
        </div>
    );
}