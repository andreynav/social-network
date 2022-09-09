import React from "react";

export default function Profile() {
    return (
        <main className='App-main'>
            <div className="App-main-background">
                {/*<img src='' alt="background"/>*/}
            </div>
            <div className="App-main-user-info">
                <div className="App-main-avatar">
                    <p>avatar</p>
                </div>
                <div className="App-main-info">
                    <p>Data: ...</p>
                </div>
            </div>
            <div className='App-main-posts'>
                <div className='App-main-posts-title'>My Posts</div>
                <div className='App-main-posts-input'>
                    <textarea />
                </div>
                <div className='App-main-posts-posts'>
                    <div>Post 1</div>
                    <div>Post 2</div>
                    <div>Post 3</div>
                    <div>Post 4</div>
                </div>
            </div>
        </main>
    );
}