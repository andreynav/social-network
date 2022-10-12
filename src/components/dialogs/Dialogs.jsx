import React from "react";
import style from "./Dialogs.module.css";
import {DialogMessage, DialogUser, TextAreaForm} from "../index"
import {Navigate} from "react-router-dom";

export default function Dialogs({dialogUsers, messages, messageAreaValue, addMessageAC, updateMessageAreaAC, isAuth}) {
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
            {isAuth
                ? <>
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
                </>
                : <Navigate to='/login' />}
        </div>
    );
}