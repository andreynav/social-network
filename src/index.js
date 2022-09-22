import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./customRedux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderAllTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={store.addPost.bind(store)}
                     updatePostArea={store.updatePostArea.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

renderAllTree(store.getState());

store.subscribe(renderAllTree);
