import React from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

export const withAuthRedirect = (Component) => {
    function ContainerWithAuthRedirect(props) {
        let isAuth = useSelector(store => store.auth.isAuth);
        if (!isAuth) return <Navigate to='/login' />
        return <Component {...props} />
    }
    return ContainerWithAuthRedirect;
}
