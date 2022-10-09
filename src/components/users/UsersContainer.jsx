import React from "react";
import {Users} from "../index";
import {
    changeToggleAC,
    setUsersAC,
    setCurrentPageAC,
    setTotalCountAC,
    setIsFetchingAC,
    setFollowInProgressAC
} from "../../store/usersPageReducer";
import {connect} from "react-redux";
import {userAPI} from "../../api/api";

class UsersContainer extends React.Component {
    selectPage = (page) => {
        this.props.setCurrentPageAC({currentPage: page});
        this.props.setIsFetchingAC({isFetching: true});
        userAPI.getUsers(this.props.usersOnPage, page)
            .then(data => {
                this.props.setUsersAC({users: data.items});
                this.props.setIsFetchingAC({isFetching: false});
            });
    }

    onChangeFollow = (id) => {
        let currentUser = this.props.users.find(user => user.id === id);
        this.props.setFollowInProgressAC({isInProgress: true,  id: currentUser.id});
        let promise = currentUser.followed ? userAPI.unfollowUser(id) : userAPI.followUser(id);
        promise.then(data => {
            if (data.resultCode === 0) {
                this.props.changeToggleAC({userId: id});
            }
            this.props.setFollowInProgressAC({isInProgress: false, id: currentUser.id});
        });
    };

    componentDidMount() {
        this.props.setIsFetchingAC({isFetching: true});
        userAPI.getUsers(this.props.usersOnPage)
            .then(data => {
                this.props.setUsersAC({users: data.items});
                this.props.setTotalCountAC({totalCount: data.totalCount});
                this.props.setCurrentPageAC({currentPage: 1});
                this.props.setIsFetchingAC({isFetching: false});
            });
    }

    render() {
        return <Users totalCount={this.props.totalCount}
                      usersOnPage={this.props.usersOnPage}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      selectPage={this.selectPage}
                      onChangeToggle={this.onChangeFollow}
                      isFetching={this.props.isFetching}
                      followInProgress={this.props.followInProgress}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
        usersOnPage: state.usersPage.usersOnPage,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress
    }
};

export default connect(mapStateToProps, {
    changeToggleAC,
    setUsersAC,
    setCurrentPageAC,
    setTotalCountAC,
    setIsFetchingAC,
    setFollowInProgressAC
})(UsersContainer);
