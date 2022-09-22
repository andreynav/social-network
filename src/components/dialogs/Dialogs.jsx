import React from "react";
import style from "./Dialogs.module.css";
import { DialogMessage, DialogUser } from "../index"

export default function Dialogs({ dialogUsers, messages }) {
    let dialogsUsers = dialogUsers.map( user =>
        <DialogUser
            key={user.id}
            userName={user.name}
            userId={user.id} />
    );
    let userMessages = messages.map( (message, item) =>
        <DialogMessage
            key={item}
            message={message.message} />
    );

    return (
        <div className={style.dialogWrapper}>
            <div className={style.dialogUsers}>
                { dialogsUsers }
            </div>
            <div className={style.dialogMessages}>
                { userMessages }
            </div>
        </div>
    );
}