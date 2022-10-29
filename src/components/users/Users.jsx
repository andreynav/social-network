import React from "react";
import style from "./Users.module.css"
import {Loader, User} from "../index";
import ReactPaginate from 'react-paginate';

export const Users = (props) => {
    const {totalCount, usersOnPage, users, selectPage, isFetching, onChangeToggle, followInProgress} = props
    let pagesCount = Math.ceil(Number(totalCount) / usersOnPage);
    let getUsersList = () => users.map(user => <User key={user.id}
                                                           id={user.id}
                                                           name={user.name}
                                                           status={user.status}
                                                           city={user.city}
                                                           followed={user.followed}
                                                           photos={user.photos}
                                                           toggleFollow={onChangeToggle}
                                                           followInProgress={followInProgress} />)

    return (
        <div className={style.usersWrapper}>
            <h3 className={style.sectionTitle}>Users</h3>
            <ReactPaginate
                className={style.pages}
                breakLabel="..."
                nextLabel="next"
                onPageChange={(event) => selectPage(event.selected + 1)}
                pageRangeDisplayed={3}
                pageCount={pagesCount}
                previousLabel="prev"
                renderOnZeroPageCount={null}
                activeClassName={style.active}
            />
            {isFetching ?
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