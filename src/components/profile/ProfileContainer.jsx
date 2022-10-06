import React from "react";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import axios from "axios";
import {Profile} from "./index";
import {setProfileInfoAC} from "../../store/profilePageReducer";

class ProfileContainer extends React.Component {
    getProfileInfo = (userId) => {
        return `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
    }

    componentDidMount() {
        let profileId = this.props.params.id;
        if (!profileId) {
            profileId = 2;
        }
        axios.get(this.getProfileInfo(profileId))
            .then(response => {
                this.props.setProfileInfoAC({profileInfo: response.data});
            })
            .catch(error => console.log(error));
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
        return <Component {...props} params={params} />;
    }
    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {
    setProfileInfoAC
})(withRouter(ProfileContainer));
