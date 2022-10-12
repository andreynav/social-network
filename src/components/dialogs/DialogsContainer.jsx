import React from "react";
import {Dialogs} from "../index";
import {addMessageAC, updateMessageAreaAC} from "../../store/dialogReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messages: state.dialogs.messages,
        messageAreaValue: state.dialogs.messageArea,
        dialogUsers: state.dialogs.dialogUsers,
        isAuth: state.auth.isAuth,
    }
};

const DialogsContainer = connect(mapStateToProps, {addMessageAC, updateMessageAreaAC})(Dialogs);
export default DialogsContainer;
