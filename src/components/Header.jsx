import React from "react";
import logo from "../logo.svg";

export default function Header() {
    return (
        <header className="App-header">
            <div className='logo'>
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
            <div className='title'>
                <p> 4GEEKS</p>
            </div>
            <div className='login'>
                <p>Login</p>
            </div>
        </header>
    );
}