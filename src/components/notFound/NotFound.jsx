import React from "react";
import {NavLink} from "react-router-dom";
import style from "../navbar/Navbar.module.css";

export default function NotFound() {
    const setActive = ({ isActive }) => isActive ? style.activeLink : '';
    return (
        <div>
            <p>404</p>
            <p>This page not found. Go <NavLink to='/profile' className={setActive} >Profile</NavLink></p>
        </div>
    );
}