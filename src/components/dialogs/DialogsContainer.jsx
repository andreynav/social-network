import React from "react";
import {Dialogs} from "../index";
import {addMessage, updateMessageArea} from "../../store/dialogPageReducer";

export default function DialogsContainer({ store }) {
    let state = store.getState();
    let addPost = () => {
        store.dispatch(addMessage());
    };
    let updatePostAreaValue = (text) => {
        store.dispatch(updateMessageArea(text));
    };

    return (
        <Dialogs
            messages={state.dialogPage.messages}
            messageAreaValue={state.dialogPage.messageArea}
            dialogUsers={state.dialogPage.dialogUsers}
            addPost={addPost}
            updatePostAreaValue={updatePostAreaValue}
        />
    );
}