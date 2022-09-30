import React from "react";
import style from "./Users.module.css"
import {User} from "../index";
import axios from "axios";

export default function Users({users, changeToggle, setUsers}) {
    if (users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users?count=20")
            .then(response => setUsers({users: response.data.items}))
            .catch(error => console.log(error));
    }
     let onChangeToggle = (id) => {
         changeToggle({userId: id});
     }

     let usersList = users.map(user => <User key={user.id}
                                             id={user.id}
                                             name={user.name}
                                             status={"user.status"}
                                             country={"user.location.country"}
                                             city={"user.location.city"}
                                             followed={user.followed}
                                             photos={user.photos}
                                             toggleFollow={onChangeToggle} />);

    return (
        <div className={style.usersWrapper}>
            <h3 className={style.sectionTitle}>Users</h3>
            <div className={style.allUsersWrapper}>
                {usersList}
            </div>
        </div>
    );
}