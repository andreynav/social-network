import React from "react";
import style from './Header.module.css'
import {logo} from "../../assets/index"

export default function Header(props) {
    const {headerWrapper, title, loginWrapper} = style;
    const {isAuth, logoWrapper, login, logout} = props;

    return (
        <header className={headerWrapper}>
            <div className={logoWrapper}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={title}>
                <p>4GEEKS</p>
            </div>
            <div className={loginWrapper}>
                {isAuth ?
                    <div>
                        <p>{login}</p>
                        <button onClick={logout}>Logout</button>
                    </div> :
                    <button>Login</button>}
            </div>
        </header>
    );
}