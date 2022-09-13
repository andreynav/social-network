import React from "react";
import style from "./Dialogs.module.css";
import DialogMessage from './dialogMessages/DialogMessage'
import DialogUser from "./dialogUsers/DialogUser";

export default function Dialogs() {
    return (
        <div className={style.dialogWrapper}>
            <div className={style.dialogUsers}>
                <DialogUser userName='Andrey' userId='1' />
                <DialogUser userName='Anna' userId='2' />
                <DialogUser userName='Zlata' userId='3' />
                <DialogUser userName='Ura' userId='4' />
            </div>
            <div className={style.dialogMessages}>
                <DialogMessage message='Hi nigga!' />
                <DialogMessage message='How are you?' />
                <DialogMessage message='Yo!' />
                <DialogMessage message='Just do it!' />
            </div>
        </div>
    );
}