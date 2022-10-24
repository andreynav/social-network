import React from "react";
import {Navigate, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

export const withAuthRedirect = (Component) => {
    function ContainerWithAuthRedirect(props) {
        const isAuth = useSelector(state => state.auth.isAuth);
        if (!isAuth) return <Navigate to='/login' />
        return <Component {...props} />
    }

    ContainerWithAuthRedirect.displayName = `withAuthRedirect(${Component.displayName || Component.name})`;
    return ContainerWithAuthRedirect;
}
