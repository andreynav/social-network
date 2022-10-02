import React from "react";
import style from "./Users.module.css"
import {User} from "../index";
import axios from "axios";

export default class Users extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeToggle = (id) => {
            this.props.changeToggle({userId: id});
        };

        this.getUsersList = () => this.props.users.map(user => <User key={user.id}
                                                                     id={user.id}
                                                                     name={user.name}
                                                                     status={"user.status"}
                                                                     country={"user.location.country"}
                                                                     city={"user.location.city"}
                                                                     followed={user.followed}
                                                                     photos={user.photos}
                                                                     toggleFollow={this.onChangeToggle}/>);
        this.pagesCount = null;
    }

    getPagesList = () => {
        let pages = [];
        let pageCount = this.pagesCount < 20 ? this.pagesCount : 20; // hardcode 20
        for (let i = 1; i <= pageCount; i++) {
            pages.push(<div key={i} onClick={()=>this.selectPage(i)} className={this.props.currentPage === i ? style.active : "" }>{i}</div>)
        }
        return pages;
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
                this.pagesCount = Math.ceil(Number(response.data.totalCount) / this.props.usersOnPage);
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className={style.usersWrapper}>
                <h3 className={style.sectionTitle}>Users</h3>
                <div className={style.pages}>{this.getPagesList()}</div>
                <div className={style.allUsersWrapper}>
                    {this.getUsersList()}
                </div>
            </div>
        );
    }
}
