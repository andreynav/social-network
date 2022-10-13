import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

export const withRouter = (Component) => {
    function ComponentWithRouterProp(props) {
        let params = useParams();
        let id = useSelector(store => store.auth.id);
        return <Component {...props} params={params} userId={id} />;
    }
    return ComponentWithRouterProp;
}
