import React from "react";
import {Loader, Paginator, User} from "../index";
import styled from 'styled-components'
import {useTranslation} from "react-i18next";

export const Users = (props) => {
    const {totalCount, usersOnPage, users, selectPage, isFetching, onChangeToggle, followInProgress} = props
    const {t} = useTranslation()
    const dynamicTitle = t("users.title", {count: totalCount})

    return (
        <UsersWrapper>
            <h3>{dynamicTitle}</h3>
            <Paginator selectPage={selectPage}
                       totalCount={totalCount}
                       usersOnPage={usersOnPage}/>
            {
                isFetching
                    ? <Loader/>
                    : <div>
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
                    </div>
            }
        </UsersWrapper>
    );
}

const UsersWrapper = styled.div`
  overflow: auto;
  display: grid;
  grid-template-rows: 30px 30px auto;
`
