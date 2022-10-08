import React from "react";
import {Header} from "../index";
import {connect} from "react-redux";
import {setAuthDataAC} from "../../store/authReducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setAuthDataAC({data: data.data});
                }
            });
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