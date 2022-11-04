import React from "react";
import style from './Header.module.css'
import {logo} from "../../assets/index"
import {Button} from "../index";

export default function Header(props) {
    const {headerWrapper, logoWrapper, title, loginWrapper} = style;
    const {isAuth, login, logout} = props;
    const loginButtonProps = {
        fontSize: '1rem',
        transform: 'none',
        bgColor: 'transparent',
        color: '#cdd9e5',
        brWidth: '0'
    }

    return (
        <header className={headerWrapper}>
            <div className={logoWrapper}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={title}>
                <p>4GEEKS</p>
            </div>
            <div className={loginWrapper}>
                {
                    isAuth ?
                        <div>
                            <p>{login}</p>
                            <Button onClick={logout} {...loginButtonProps}>Logout</Button>
                        </div> :
                        <Button {...loginButtonProps}>Login</Button>
                }
            </div>
        </header>
    );
}
