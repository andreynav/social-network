import React from "react";
import {useParams} from "react-router-dom";
import {connect, useSelector} from "react-redux";
import {Profile} from "./index";
import {setProfileInfo} from "../../store/profileReducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.id || this.props.userId || 2;
        this.props.setProfileInfo(userId);
    }

    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profile.profileInfo,
        profileInfoStatus: state.profile.profileInfoStatus,
        profileInfoError: state.profile.profileInfoError
    }
}

let withRouter = (Component) => {
    function ComponentWithRouterProp(props) {
        let params = useParams();
        let id = useSelector(store => store.auth.id);
        return <Component {...props} params={params} userId={id} />;
    }
    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {
    setProfileInfo
})(withRouter(ProfileContainer));
