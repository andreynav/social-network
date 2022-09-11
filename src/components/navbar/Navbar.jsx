import React from "react";
import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const setActive = ({ isActive }) => isActive ? style.activeLink : '';
    return (
        <nav className={style.navbarWrapper}>
            <div className={style.item}>
                <NavLink to='/profile' className={setActive} >Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/massages' className={setActive} >Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/news' className={setActive} >News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music' className={setActive} >Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/settings' className={setActive} >Settings</NavLink>
            </div>
        </nav>
    );
}