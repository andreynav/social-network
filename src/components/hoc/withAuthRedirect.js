import React from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

export const withAuthRedirect = (Component) => {
    function ContainerWithAuthRedirect(props) {
        let isAuth = useSelector(state => state.auth.isAuth);
        if (!isAuth) return <Navigate to='/login' />
        return <Component {...props} />
    }

    ContainerWithAuthRedirect.displayName = `withAuthRedirect(${Component.displayName || Component.name})`;
    return ContainerWithAuthRedirect;
}
