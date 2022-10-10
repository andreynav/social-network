import React from "react";
import {Header} from "../index";
import {connect} from "react-redux";
import {getAuthUserData} from "../../store/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
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
        isAuth: state.auth.isAuth,
        status: state.auth.status,
        error: state.auth.error
    }
}

export default connect(mapStateToProps, {
    getAuthUserData
})(HeaderContainer);