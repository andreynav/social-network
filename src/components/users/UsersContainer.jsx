import React from "react";
import {Users} from "../index";
import {changeToggleAC, setUsersAC, setCurrentPageAC, setTotalCountAC, setIsFetchingAC} from "../../store/usersPageReducer";
import {connect} from "react-redux";
import axios from "axios";

class UsersContainer extends React.Component {
    getPage = (count = this.props.usersOnPage, page = 1) => {
        return `https://social-network.samuraijs.com/api/1.0/users?count=${count}&page=${page}`
    }

    followUser = (id) => {
        return `https://social-network.samuraijs.com/api/1.0/follow/${id}`
    }

    selectPage = (page) => {
        this.props.setCurrentPageAC({currentPage: page});
        this.props.setIsFetchingAC({isFetching: true});
        axios.get(this.getPage(this.props.usersOnPage, page), {
            withCredentials: true
        })
            .then(response => {
                this.props.setUsersAC({users: response.data.items});
                this.props.setIsFetchingAC({isFetching: false});
            })
            .catch(error => console.log(error));

    }

    onChangeToggle = (id) => {
        this.props.users.filter(user => {
            if (user.id === id) {
                if (user.followed) {
                    axios.delete(this.followUser(id), {
                        withCredentials: true,
                        headers: {
                            'API-KEY': 'b055b506-f05b-42fe-928f-891da5e27dea'
                        }
                    })
                        .then(response => {
                            if (response.data.resultCode === 0) {
                                this.props.changeToggleAC({userId: id});
                            }
                        })
                        .catch(error => console.log(error));
                } else {
                    axios.post(this.followUser(id), {},{
                        withCredentials: true,
                        headers: {
                            'API-KEY': 'b055b506-f05b-42fe-928f-891da5e27dea'
                        }
                    })
                        .then(response => {
                            if (response.data.resultCode === 0) {
                                this.props.changeToggleAC({userId: id});
                            }
                        })
                        .catch(error => console.log(error));
                }
            }
        });


    };

    componentDidMount() {
        this.props.setIsFetchingAC({isFetching: true});
        axios.get(this.getPage(), {
            withCredentials: true
        })
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

export default connect(mapStateToProps, {
    changeToggleAC,
    setUsersAC,
    setCurrentPageAC,
    setTotalCountAC,
    setIsFetchingAC
})(UsersContainer);
