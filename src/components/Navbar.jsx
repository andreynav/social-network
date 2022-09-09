import React from "react";

export default function Navbar() {
    return (
        <nav className='App-nav'>
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