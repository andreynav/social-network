import React from "react";
import {Dialogs} from "../index";
import {addMessageAC, updateMessageAreaAC} from "../../store/dialogPageReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messages: state.dialogPage.messages,
        messageAreaValue: state.dialogPage.messageArea,
        dialogUsers: state.dialogPage.dialogUsers
    }
};

const DialogsContainer = connect(mapStateToProps, {
    addMessageAC,
    updateMessageAreaAC
})(Dialogs);

export default DialogsContainer;