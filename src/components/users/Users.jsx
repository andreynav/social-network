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
    }

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users?count=20")
            .then(response => this.props.setUsers({users: response.data.items}))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className={style.usersWrapper}>
                <h3 className={style.sectionTitle}>Users</h3>
                <div className={style.allUsersWrapper}>
                    {this.getUsersList()}
                </div>
            </div>
        );
    }
}
