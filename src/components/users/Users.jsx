import React from "react";
import style from "./Users.module.css"
import {Loader, Paginator, User} from "../index";

export const Users = (props) => {
    const {totalCount, usersOnPage, users, selectPage, isFetching, onChangeToggle, followInProgress} = props
    const {usersWrapper, loaderContainer} = style

    return (
        <div className={usersWrapper}>
            <h3>Users</h3>
            <Paginator selectPage={selectPage}
                       totalCount={totalCount}
                       usersOnPage={usersOnPage}/>
            {
                isFetching ?
                    <div className={loaderContainer}>
                        <Loader/>
                    </div> :
                    <di>
                        {
                            users.map(user => <User key={user.id}
                                                    id={user.id}
                                                    name={user.name}
                                                    status={user.status}
                                                    city={user.city}
                                                    followed={user.followed}
                                                    photos={user.photos}
                                                    toggleFollow={onChangeToggle}
                                                    followInProgress={followInProgress}
                            />)
                        }
                    </di>
            }
        </div>
    );
}