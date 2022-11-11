import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {App} from "../src/components/index";
import store from './store/store'
import {Provider} from 'react-redux'
import {GlobalStyles} from "../src/components/index";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <React.StrictMode>
        <Provider store={store}>
            <GlobalStyles />
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    // </React.StrictMode>
);