import state, {addPost, subscribe, updatePostArea} from "./customRedux/state";
import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderAllTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updatePostArea={updatePostArea}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

renderAllTree(state);

subscribe(renderAllTree);