import React from "react";
import {connect} from "react-redux";
import {compose} from "@reduxjs/toolkit";
import {Dialogs} from "../index";
import {addMessageAC, selectDialogUsers, selectMessages} from "../../store/dialogReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect"


let mapStateToProps = (state) => ({
    dialogUsers: selectDialogUsers(state),
    messages: selectMessages(state),
});

export default compose(
    connect(mapStateToProps, {addMessageAC}),
    withAuthRedirect
)(Dialogs)
