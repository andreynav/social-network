import React, {useEffect} from "react";
import {Header} from "../index";
import {connect, useDispatch} from "react-redux";
import {getAuthUserData, logoutUser} from "../../store/authReducer";
import {useNavigate} from "react-router-dom";

function HeaderContainer(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(logoutUser());
     }

    useEffect(() => {
        navigate('/login');
    }, [])

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

export default connect(mapStateToProps, {getAuthUserData, logoutUser})(HeaderContainer);