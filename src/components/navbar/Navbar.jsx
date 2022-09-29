import React from "react";
import {NavLink} from 'react-router-dom'
import style from './Navbar.module.css'
import {setActive} from "../../utils/utills";

export default function Navbar() {
    return (
        <nav className={style.navbarWrapper}>
            <div className={style.item}>
                <NavLink to='/profile' className={setActive(style.activeLink)}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/massages' className={setActive(style.activeLink)}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/users' className={setActive(style.activeLink)}>Users</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/news' className={setActive(style.activeLink)}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music' className={setActive(style.activeLink)}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/settings' className={setActive(style.activeLink)}>Settings</NavLink>
            </div>
        </nav>
    );
}