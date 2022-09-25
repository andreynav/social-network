import React from "react";
import style from "./Dialogs.module.css";
import { DialogMessage, DialogUser, TextAreaForm } from "../index"
import { addMessage, updateMessageArea } from "../../store/dialogPageReducer";

export default function Dialogs({dialogUsers, messages, messageAreaValue, dispatch}) {
    let dialogsUsers = dialogUsers.map(user =>
        <DialogUser
            key={user.id}
            userName={user.name}
            userId={user.id}/>
    );
    let userMessages = messages.map((message, item) =>
        <DialogMessage
            key={item}
            message={message.message}/>
    );
    let addPost = () => {
        dispatch(addMessage());
    }
    let updatePostArea = (event) => {
        let text = event.target.value;
        dispatch(updateMessageArea(text));
    }


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
                    addPost={addPost} />
            </div>
        </div>
    );
}