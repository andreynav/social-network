import React from "react";
import {Users} from "../index";
import {changeToggleAC, setUsersAC, setCurrentPageAC, setTotalCountAC, setIsFetchingAC} from "../../store/usersPageReducer";
import {connect} from "react-redux";
import axios from "axios";

class UsersContainerAPI extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeToggle = (id) => {
            this.props.changeToggleAC({userId: id});
        };
    }

    getPage = (count = this.props.usersOnPage, page = 1) => {
        return `https://social-network.samuraijs.com/api/1.0/users?count=${count}&page=${page}`
    }

    selectPage = (page) => {
        this.props.setCurrentPageAC({currentPage: page});
        this.props.setIsFetchingAC({isFetching: true});
        axios.get(this.getPage(this.props.usersOnPage, page))
            .then(response => {
                this.props.setUsersAC({users: response.data.items});
                this.props.setIsFetchingAC({isFetching: false});
            })
            .catch(error => console.log(error));

    }

    componentDidMount() {
        this.props.setIsFetchingAC({isFetching: true});
        axios.get(this.getPage())
            .then(response => {
                this.props.setUsersAC({users: response.data.items});
                this.props.setTotalCountAC({totalCount: response.data.totalCount});
                this.props.setCurrentPageAC({currentPage: 1});
                this.props.setIsFetchingAC({isFetching: false});
            })
            .catch(error => console.log(error));
    }

    render() {
        return <Users totalCount={this.props.totalCount}
                      usersOnPage={this.props.usersOnPage}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      selectPage={this.selectPage}
                      onChangeToggle={this.onChangeToggle}
                      isFetching={this.props.isFetching}
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
    }
};

const UsersContainer = connect(mapStateToProps, {
    changeToggleAC,
    setUsersAC,
    setCurrentPageAC,
    setTotalCountAC,
    setIsFetchingAC
})(UsersContainerAPI);

export default UsersContainer;