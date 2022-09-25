import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import store from "./store/customStore";
import store from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderAllTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>
    );
}

renderAllTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    renderAllTree(state);
});
