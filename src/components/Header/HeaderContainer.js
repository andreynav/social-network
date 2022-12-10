import React from "react";
import {Header} from "../index";
import {connect} from "react-redux";
import {logoutUser, selectIsAuth, selectLogin} from "../../store/authReducer";

const HeaderContainer = ({ isAuth, login, logoutUser }) => {

    const logout = () => {
        logoutUser()
    }

    return (
        <Header logout={logout} isAuth={isAuth} login={login} />
    )
}

const mapStateToProps = (state) => ({
    login: selectLogin(state),
    isAuth: selectIsAuth(state),
});

export default connect(mapStateToProps, {logoutUser})(HeaderContainer);