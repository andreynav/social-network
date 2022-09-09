import React from "react";
import style from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={style.footerWrapper}>
            <div className={style.email}>
                <a>Email: nav.testsw@gmail.com</a>
            </div>
            <div className={style.phone}>
                <a>Phone: +375 29 6066602</a>
            </div>
        </footer>
    );
}