import React from "react";
import logo from "../../logo.svg";
import style from './Header.module.css'

export default function Header() {
    return (
        <header className={style.headerWrapper}>
            <div className={style.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={style.title}>
                <p> 4GEEKS</p>
            </div>
            <div className={style.login}>
                <p>Login</p>
            </div>
        </header>
    );
}