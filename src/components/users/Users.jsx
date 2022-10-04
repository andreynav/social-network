import React from "react";
import style from "./Users.module.css"
import {Loader, User} from "../index";
import ReactPaginate from 'react-paginate';

export default function Users(props) {
    let pagesCount = Math.ceil(Number(props.totalCount) / props.usersOnPage);
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
            <ReactPaginate
                className={style.pages}
                breakLabel="..."
                nextLabel="&#5125;"
                onPageChange={(event) => props.selectPage(event.selected + 1)}
                pageRangeDisplayed={3}
                pageCount={pagesCount}
                previousLabel="&#5130;"
                renderOnZeroPageCount={null}
                activeClassName={style.active}
            />
            {props.isFetching ?
                <div className={style.loaderContainer}>
                    <Loader/>
                </div> :
                <div className={style.allUsersWrapper}>
                    {getUsersList()}
                </div>
            }
        </div>
    );
}