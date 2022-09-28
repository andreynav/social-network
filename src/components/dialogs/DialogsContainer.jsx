import React from "react";
import {Dialogs} from "../index";
import {addMessage, updateMessageArea} from "../../store/dialogPageReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messages: state.dialogPage.messages,
        messageAreaValue: state.dialogPage.messageArea,
        dialogUsers: state.dialogPage.dialogUsers
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addMessage());
        },
        updatePostAreaValue: (text) => {
            dispatch(updateMessageArea(text));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;