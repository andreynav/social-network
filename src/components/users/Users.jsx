import React from "react";
import style from "./Users.module.css"
import {User} from "../index";

export default function Users({users, changeToggle}) {
     let onChangeToggle = (id) => {
         changeToggle({userId: id});
     }

     let usersList = users.map(user => <User key={user.id}
                                             id={user.id}
                                             fullName={user.fullName}
                                             status={user.status}
                                             country={user.location.country}
                                             city={user.location.city}
                                             followed={user.followed}
                                             photoUrl={user.photoUrl}
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