import React from "react";
import {useParams} from "react-router-dom";
import {connect, useSelector} from "react-redux";
import {Profile} from "./index";
import {setProfileInfoAC} from "../../store/profilePageReducer";
import {profileAPI} from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.id;
        if (!userId) {
            userId = this.props.userId || 2;
        }
        profileAPI.getProfileInfo(userId)
            .then(data => {
                this.props.setProfileInfoAC({profileInfo: data});
            });
    }

    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo
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
    setProfileInfoAC
})(withRouter(ProfileContainer));
