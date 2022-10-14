import React from "react";
import {connect} from "react-redux";
import {compose} from "@reduxjs/toolkit";
import {Dialogs} from "../index";
import {addMessageAC, updateMessageAreaAC} from "../../store/dialogReducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect" // import from index.js doesn't work. Why?


let mapStateToProps = (state) => {
    return {
        messages: state.dialogs.messages,
        messageAreaValue: state.dialogs.messageArea,
        dialogUsers: state.dialogs.dialogUsers,
    }
};

export default compose(
    connect(mapStateToProps, {addMessageAC, updateMessageAreaAC}),
    withAuthRedirect
)(Dialogs)
