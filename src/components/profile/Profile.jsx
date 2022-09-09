import React from "react";
import style from './Profile.module.css'

export default function Profile() {
    return (
        <main className={style.profileWrapper}>
            <div className={style.backgroundPhoto}>
                {/*<img src='' alt="background"/>*/}
            </div>
            <div className={style.userDataWrapper}>
                <div className={style.userAvatar}>
                    <p>avatar</p>
                </div>
                <div className={style.userInfo}>
                    <p>Data: ...</p>
                </div>
            </div>
            <div className={style.userPostsWrapper}>
                <div className={style.postsTitle}>My Posts</div>
                <div className={style.postsInput}>
                    <textarea />
                </div>
                <div className={style.allPostsWrapper}>
                    <div>Post 1</div>
                    <div>Post 2</div>
                    <div>Post 3</div>
                    <div>Post 4</div>
                </div>
            </div>
        </main>
    );
}