import React from "react";
import {Dialogs} from "../index";
import {addMessageAC, updateMessageAreaAC} from "../../store/dialogReducer";
import {connect, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        messages: state.dialogs.messages,
        messageAreaValue: state.dialogs.messageArea,
        dialogUsers: state.dialogs.dialogUsers,
    }
};

const withAuthRedirect = (Component) => {
    function ContainerWithAuthRedirect(props) {
        let isAuth = useSelector(store => store.auth.isAuth);
        if (!isAuth) return <Navigate to='/login' />
        return <Component {...props} />
    }
    return ContainerWithAuthRedirect;
}

const DialogsContainer = connect(mapStateToProps, {addMessageAC, updateMessageAreaAC})(withAuthRedirect(Dialogs));
export default DialogsContainer;
