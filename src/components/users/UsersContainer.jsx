import React from "react";
import {Users} from "../index";
import {changeToggleAC, setUsersAC, setCurrentPageAC, setTotalCountAC} from "../../store/usersPageReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
        usersOnPage: state.usersPage.usersPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        changeToggle: (id) => {
            dispatch(changeToggleAC(id));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount));
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;