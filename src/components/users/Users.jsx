import React from "react";
import style from "./Users.module.css"
import {User} from "../index";

export default function Users(props) {
    let pagesCount = Math.ceil(Number(props.totalCount) / props.usersOnPage);

    let getPagesList = () => {
        let pages = [];
        let pageCount = pagesCount < 20 ? pagesCount : 20; // hardcode 20
        for (let i = 1; i <= pageCount; i++) {
            pages.push(<div key={i} onClick={() => props.selectPage(i)}
                            className={props.currentPage === i ? style.active : ""}>{i}</div>)
        }
        return pages;
    }

    let getUsersList = () => props.users.map(user => <User key={user.id}
                                                           id={user.id}
                                                           name={user.name}
                                                           status={"user.status"}
                                                           country={"user.location.country"}
                                                           city={"user.location.city"}
                                                           followed={user.followed}
                                                           photos={user.photos}
                                                           toggleFollow={props.onChangeToggle}/>)
    return (
        <div className={style.usersWrapper}>
            <h3 className={style.sectionTitle}>Users</h3>
            <div className={style.pages}>{getPagesList()}</div>
            <div className={style.allUsersWrapper}>
                {getUsersList()}
            </div>
        </div>
    );
}