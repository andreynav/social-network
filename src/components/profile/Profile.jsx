import React from "react";
import style from './Profile.module.css'
import {MyPostsContainer, ProfileInfo} from "../index"
import {Navigate} from "react-router-dom";

export default function Profile(props) {
    return (
        <main className={style.profileWrapper}>
            {props.isAuth
                ? <>
                    <ProfileInfo profileInfo={props.profileInfo}/>
                    <MyPostsContainer/>
                </>
                : <Navigate to='/login' />
            }
        </main>
    );
}