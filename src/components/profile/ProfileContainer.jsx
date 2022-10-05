import React from "react";
import {Profile} from "./index";
import axios from "axios";
import {connect} from "react-redux";
import {setProfileInfoAC} from "../../store/profilePageReducer";

class ProfileContainerAPI extends React.Component {
    getProfileInfo = (userId) => {
        return `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
    }

    componentDidMount() {
        // console.log(this.props)
        axios.get(this.getProfileInfo(2))
            .then(response => {
                this.props.setProfileInfoAC({profileInfo: response.data});
            })
            .catch(error => console.log(error));
    }

    render() {
        return <Profile {...this.props} profileInfo={this.props.profileInfo} />
    }
}

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo
    }
}

const ProfileContainer = connect(mapStateToProps, {
    setProfileInfoAC
})(ProfileContainerAPI);

export default ProfileContainer;