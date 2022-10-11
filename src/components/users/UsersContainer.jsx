import React from "react";
import {Users} from "../index";
import {setCurrentPageAC, setUsers, toggleFollowUnfollow} from "../../store/usersReducer";
import {connect} from "react-redux";

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
                      followInProgress={this.props.followInProgress}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.users.users,
        currentPage: state.users.currentPage,
        totalCount: state.users.totalCount,
        usersOnPage: state.users.usersOnPage,
        isFetching: state.users.isFetching,
        followInProgress: state.users.followInProgress,
        error: state.users.error
    }
};

export default connect(mapStateToProps, {
    setCurrentPageAC,
    setUsers,
    toggleFollowUnfollow,
})(UsersContainer);
