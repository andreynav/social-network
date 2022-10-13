import React from "react";
import style from "./Dialogs.module.css";
import {DialogMessage, DialogUser, TextAreaForm} from "../index"

export default function Dialogs({dialogUsers, messages, messageAreaValue, addMessageAC, updateMessageAreaAC}) {
    let dialogsUsers = dialogUsers.map(user => <DialogUser key={user.id} userName={user.name} userId={user.id}/>);
    let userMessages = messages.map((message, item) => <DialogMessage key={item} message={message.message}/>);

    let addMessage = () => {
        addMessageAC();
    };
    let updatePostArea = (event) => {
        let text = event.target.value;
        updateMessageAreaAC(text);
    };

    return (
        <div className={style.dialogWrapper}>
            <div className={style.dialogMessagesWrapper}>
                <div className={style.dialogUsers}>
                    {dialogsUsers}
                </div>
                <div className={style.dialogMessages}>
                    {userMessages}
                </div>
            </div>
            <div className={style.dialogInput}>
                <TextAreaForm
                    updatePostArea={updatePostArea}
                    postAreaValue={messageAreaValue}
                    onAddPost={addMessage}/>
            </div>
        </div>
    );
}