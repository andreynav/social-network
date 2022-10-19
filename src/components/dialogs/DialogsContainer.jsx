import React from "react";
import {connect} from "react-redux";
import {compose} from "@reduxjs/toolkit";
import {Dialogs} from "../index";
import {addMessageAC} from "../../store/dialogReducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect" // import from index.js doesn't work. Why?


let mapStateToProps = (state) => {
    return {
        dialogUsers: state.dialogs.dialogUsers,
        messages: state.dialogs.messages,
    }
};

export default compose(
    connect(mapStateToProps, {addMessageAC}),
    withAuthRedirect
)(Dialogs)
