import React from "react";
import style from './Header.module.css'
import { logo } from "../../assets/index"

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