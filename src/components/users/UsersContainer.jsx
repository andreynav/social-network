import React from "react";
import {Users} from "../index";
import {changeToggleAC, setUsersAC, setCurrentPageAC, setTotalCountAC} from "../../store/usersPageReducer";
import {connect} from "react-redux";
import axios from "axios";

class UsersContainerAPI extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeToggle = (id) => {
            this.props.changeToggle({userId: id});
        };
    }

    getPage = (count = this.props.usersOnPage, page = 1) => {
        return `https://social-network.samuraijs.com/api/1.0/users?count=${count}&page=${page}`
    }

    selectPage = (page) => {
        axios.get(this.getPage(this.props.usersOnPage, page))
            .then(response => {
                this.props.setUsers({users: response.data.items})
                this.props.setCurrentPage({currentPage: page});
            })
            .catch(error => console.log(error));
    }

    componentDidMount() {
        axios.get(this.getPage())
            .then(response => {
                this.props.setUsers({users: response.data.items});
                this.props.setTotalCount({totalCount: response.data.totalCount});
                this.props.setCurrentPage({currentPage: 1});
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
        />
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
        usersOnPage: state.usersPage.usersOnPage
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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI);

export default UsersContainer;