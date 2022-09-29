import React from "react";
import {Users} from "../index";
import {changeToggleAC, setUsersAC} from "../../store/usersPageReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        changeToggle: (id) => {
            dispatch(changeToggleAC(id));
        },
        setUsers(users) {
            dispatch(setUsersAC(users));
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;