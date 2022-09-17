import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import state, {addPost} from "./customRedux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App state={state} addPost={addPost} />
        </BrowserRouter>
    </React.StrictMode>
);
