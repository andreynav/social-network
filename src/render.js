import React from 'react';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost} from "./customRedux/state";
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderAllTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} />
            </BrowserRouter>
        </React.StrictMode>
    );
}
 export {renderAllTree};