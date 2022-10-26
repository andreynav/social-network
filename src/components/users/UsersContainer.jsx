import React from "react";
import {Users} from "../index";
import {
    selectCurrentPage,
    selectError,
    selectFollowInProgress,
    selectIsFetching,
    selectTotalCount,
    selectUsers,
    selectUsersOnPage,
    setCurrentPageAC,
    setUsers,
    toggleFollowUnfollow
} from "../../store/usersReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "@reduxjs/toolkit"; // import from index.js doesn't work. Why?

class UsersContainer extends React.Component {
    selectPage = (page) => {
        this.props.setCurrentPageAC({page});
        this.props.setUsers({usersOnPage: this.props.usersOnPage, page});
    }

    onChangeFollow = (id) => {
        let currentUser = this.props.users.find(user => user.id === id);
        this.props.toggleFollowUnfollow({user: currentUser, id});
    };

    componentDidMount() {
        this.props.setCurrentPageAC({page: 1});
        this.props.setUsers({usersOnPage: this.props.usersOnPage, page: 1});
    }

    render() {
        return <Users totalCount={this.props.totalCount}
                      usersOnPage={this.props.usersOnPage}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      selectPage={this.selectPage}
                      onChangeToggle={this.onChangeFollow}
                      isFetching={this.props.isFetching}
                      followInProgress={this.props.followInProgress}/>
    }
}

let mapStateToProps = (state) => ({
    users: selectUsers(state),
    currentPage: selectCurrentPage(state),
    totalCount: selectTotalCount(state),
    usersOnPage: selectUsersOnPage(state),
    isFetching: selectIsFetching(state),
    followInProgress: selectFollowInProgress(state),
    error: selectError(state)
});

export default compose(
    connect(mapStateToProps, {setCurrentPageAC, setUsers, toggleFollowUnfollow}),
    withAuthRedirect
)(UsersContainer)
