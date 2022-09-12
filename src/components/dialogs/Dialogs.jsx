import React from "react";
import style from "./Dialogs.module.css";
import DialogMessage from './dialogMessages/DialogMessage'
import DialogUser from "./dialogUsers/DialogUser";


export default function Dialogs() {
    return (
        <div className={style.dialogWrapper}>
            <div className={style.dialogUsers}>
                <DialogUser userName='Andrey' />
                <DialogUser userName='Anna' />
                <DialogUser userName='Zlata' />
                <DialogUser userName='Ura' />
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