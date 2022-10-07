import React from "react";
import {Header} from "../index";
import {connect} from "react-redux";
import {setAuthDataAC} from "../../store/authReducer";
import axios from "axios";

class HeaderContainer extends React.Component {
    authMe = () => {
        return `https://social-network.samuraijs.com/api/1.0/auth/me`
    }
    
    componentDidMount() {
        axios.get(this.authMe(), {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 1) {
                    console.log(response.data.messages[0]);
                }
                this.props.setAuthDataAC({data: response.data.data});
            })
            .catch(error => console.log(error));
    }

    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        login: state.auth.login,
        email: state.auth.email,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {
    setAuthDataAC
})(HeaderContainer);