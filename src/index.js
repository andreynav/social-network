import store from "./customRedux/store";
import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderAllTree = (store) => {
    console.log('rendered');
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.state} addPost={store.addPost} updatePostArea={store.updatePostArea}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

renderAllTree(store);

store.subscribe(renderAllTree);
