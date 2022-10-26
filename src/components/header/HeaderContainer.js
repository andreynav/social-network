import React from "react";
import {Header} from "../index";
import {connect, useDispatch} from "react-redux";
import {
    logoutUser,
    selectIsAuth,
    selectLogin,
} from "../../store/authReducer";

function HeaderContainer(props) {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutUser());
    }

    return (
        <Header logout={logout} {...props} />
    )
}

const mapStateToProps = (state) => ({
    login: selectLogin(state),
    isAuth: selectIsAuth(state),
});

export default connect(mapStateToProps, {logoutUser})(HeaderContainer);