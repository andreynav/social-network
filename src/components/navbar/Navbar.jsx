import React from "react";
import style from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={style.navbarWrapper}>
            <div>
                <a href='/profile'>Profile</a>
            </div>
            <div>
                <a href='/massages'>Messages</a>
            </div>
            <div>
                <a href='/news'>News</a>
            </div>
            <div>
                <a href='/music'>Music</a>
            </div>
            <div>
                <a href='/settings'>Settings</a>
            </div>
        </nav>
    );
}