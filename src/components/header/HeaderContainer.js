import React from "react";
import {Header} from "../index";
import {connect, useDispatch} from "react-redux";
import {logoutUser} from "../../store/authReducer";

function HeaderContainer(props) {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutUser());
     }

    return (
        <Header logout={logout} {...props} />
    )
}

const mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        login: state.auth.login,
        email: state.auth.email,
        isAuth: state.auth.isAuth,
        status: state.auth.status,
        error: state.auth.error,
    }
}

export default connect(mapStateToProps, {logoutUser})(HeaderContainer);